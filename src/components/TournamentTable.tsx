import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getTournamentTable, Team } from '@/utils/api';

interface TournamentTableProps {
  tournamentId: string;
  source: string;
}

const TournamentTable: React.FC<TournamentTableProps> = ({ tournamentId, source }) => {
  const { data: teams = [], isLoading, error } = useQuery<Team[]>({
    queryKey: ['tournament-table', tournamentId],
    queryFn: async () => {
      const data = await getTournamentTable(tournamentId, source);
      return data.teams;
    },
  });
  
  if (isLoading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-emerald-600 border-t-transparent"></div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="min-h-[200px] flex items-center justify-center text-red-600">
        Ошибка при загрузке данных
      </div>
    );
  }
  
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Команда</th>
            <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">И</th>
            <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">В</th>
            <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Н</th>
            <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">П</th>
            <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">ЗМ</th>
            <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">ПМ</th>
            <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">О</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {teams.map((team, index) => (
            <tr 
              key={`${team.name}-${index}`}
              className="hover:bg-gray-50 transition-colors"
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-medium ${
                  index === 0 ? 'bg-yellow-100 text-yellow-800' :
                  index === 1 ? 'bg-gray-100 text-gray-800' :
                  index === 2 ? 'bg-amber-100 text-amber-800' :
                  'text-gray-900'
                }`}>
                  {team.position}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{team.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">{team.played}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">{team.won}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">{team.drawn}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">{team.lost}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">{team.goalsFor}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">{team.goalsAgainst}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium text-emerald-600">{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TournamentTable;
