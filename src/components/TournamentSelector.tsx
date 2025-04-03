import React from 'react';
import { tournaments } from '@/utils/mockData';

interface TournamentSelectorProps {
  selectedTournament: string;
  onTournamentChange: (tournamentId: string) => void;
}

const TournamentSelector: React.FC<TournamentSelectorProps> = ({
  selectedTournament,
  onTournamentChange
}) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-8">
      {tournaments.map((tournament) => (
        <button
          key={tournament.id}
          onClick={() => onTournamentChange(tournament.id)}
          className={`px-6 py-3 rounded-lg font-medium transition-all ${
            selectedTournament === tournament.id
              ? 'bg-emerald-600 text-white'
              : 'bg-emerald-900/50 text-emerald-400 hover:bg-emerald-800/50'
          }`}
        >
          <div className="text-sm md:text-base">{tournament.name}</div>
          <div className="text-xs md:text-sm opacity-75">{tournament.season}</div>
        </button>
      ))}
      <button
        onClick={() => onTournamentChange('all')}
        className={`px-6 py-3 rounded-lg font-medium transition-all ${
          selectedTournament === 'all'
            ? 'bg-emerald-600 text-white'
            : 'bg-emerald-900/50 text-emerald-400 hover:bg-emerald-800/50'
        }`}
      >
        <div className="text-sm md:text-base">Все турниры</div>
        <div className="text-xs md:text-sm opacity-75">2024-2025</div>
      </button>
    </div>
  );
};

export default TournamentSelector; 