import React from 'react';
import { mockMatches } from '@/utils/mockData';

const RecentMatches: React.FC = () => {
  return (
    <div className="space-y-4">
      {mockMatches.map((match, index) => (
        <div
          key={index}
          className="bg-emerald-900/20 backdrop-blur-lg rounded-lg p-6 hover:bg-emerald-900/30 transition-colors border border-emerald-800/30"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex-1">
              <p className="text-sm text-emerald-400 mb-2">
                {new Date(match.date).toLocaleDateString('ru-RU')}
              </p>
              <p className="font-medium text-white text-lg">{match.tournament}</p>
            </div>
            <div className="flex items-center gap-6 text-xl">
              <div className="text-right flex-1">
                <span className="text-white font-bold">{match.homeTeam}</span>
                <div className="text-emerald-500 text-sm mt-1">Хозяева</div>
              </div>
              <div className="px-6 py-3 bg-emerald-700 rounded-lg font-bold text-white min-w-[100px] text-center">
                {match.status === 'completed' ? (
                  <span>{match.homeScore} : {match.awayScore}</span>
                ) : (
                  <span className="text-sm uppercase">Скоро</span>
                )}
              </div>
              <div className="text-left flex-1">
                <span className="text-white font-bold">{match.awayTeam}</span>
                <div className="text-emerald-500 text-sm mt-1">Гости</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentMatches; 