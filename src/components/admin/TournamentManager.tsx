import React, { useState } from 'react';

interface Tournament {
  id: string;
  name: string;
  date: string;
  status: 'active' | 'completed' | 'upcoming';
  participants: number;
}

const TournamentManager: React.FC = () => {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [newTournament, setNewTournament] = useState({
    name: '',
    date: '',
    status: 'upcoming' as const
  });

  const handleCreateTournament = async () => {
    try {
      // Здесь должен быть запрос к API для создания турнира
      // const response = await fetch('/api/tournaments', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(newTournament)
      // });
      // const data = await response.json();
      
      // Временная заглушка для демонстрации
      const mockTournament: Tournament = {
        id: Date.now().toString(),
        ...newTournament,
        participants: 0
      };
      
      setTournaments([...tournaments, mockTournament]);
      setIsCreating(false);
      setNewTournament({ name: '', date: '', status: 'upcoming' });
    } catch (error) {
      console.error('Ошибка создания турнира:', error);
    }
  };

  const handleUpdateStatus = async (id: string, newStatus: Tournament['status']) => {
    try {
      // Здесь должен быть запрос к API для обновления статуса
      // await fetch(`/api/tournaments/${id}`, {
      //   method: 'PATCH',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ status: newStatus })
      // });
      
      setTournaments(tournaments.map(t => 
        t.id === id ? { ...t, status: newStatus } : t
      ));
    } catch (error) {
      console.error('Ошибка обновления статуса:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Управление турнирами</h2>
        <button
          onClick={() => setIsCreating(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Создать турнир
        </button>
      </div>

      {isCreating && (
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Создание нового турнира</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Название</label>
              <input
                type="text"
                value={newTournament.name}
                onChange={(e) => setNewTournament({ ...newTournament, name: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Дата</label>
              <input
                type="date"
                value={newTournament.date}
                onChange={(e) => setNewTournament({ ...newTournament, date: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Статус</label>
              <select
                value={newTournament.status}
                onChange={(e) => setNewTournament({ ...newTournament, status: e.target.value as Tournament['status'] })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="upcoming">Предстоящий</option>
                <option value="active">Активный</option>
                <option value="completed">Завершенный</option>
              </select>
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsCreating(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Отмена
              </button>
              <button
                onClick={handleCreateTournament}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Создать
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Название
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Дата
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Статус
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Участники
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Действия
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tournaments.map((tournament) => (
              <tr key={tournament.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{tournament.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{tournament.date}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    tournament.status === 'active' ? 'bg-green-100 text-green-800' :
                    tournament.status === 'completed' ? 'bg-gray-100 text-gray-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {tournament.status === 'active' ? 'Активный' :
                     tournament.status === 'completed' ? 'Завершенный' :
                     'Предстоящий'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {tournament.participants}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <select
                    value={tournament.status}
                    onChange={(e) => handleUpdateStatus(tournament.id, e.target.value as Tournament['status'])}
                    className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="upcoming">Предстоящий</option>
                    <option value="active">Активный</option>
                    <option value="completed">Завершенный</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TournamentManager; 