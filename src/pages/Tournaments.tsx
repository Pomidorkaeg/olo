import React, { useState } from 'react';
import { Trophy, ChevronRight, ChevronLeft } from 'lucide-react';

const Tournaments = () => {
  const [activeTab, setActiveTab] = useState<'siberia' | 'ffnso'>('siberia');

  // Данные из СФФ Сибири
  const siberiaTournaments = [
    {
      id: 1,
      name: 'Чемпионат Сибири 2024',
      status: 'active',
      tables: [
        {
          id: 1,
          name: 'Группа А',
          teams: [
            { position: 1, name: 'Сибирь', games: 5, wins: 4, draws: 1, losses: 0, goalsFor: 12, goalsAgainst: 3, points: 13 },
            { position: 2, name: 'Томь', games: 5, wins: 3, draws: 2, losses: 0, goalsFor: 10, goalsAgainst: 4, points: 11 },
            { position: 3, name: 'Омск', games: 5, wins: 2, draws: 1, losses: 2, goalsFor: 8, goalsAgainst: 7, points: 7 },
            { position: 4, name: 'Новосибирск', games: 5, wins: 1, draws: 1, losses: 3, goalsFor: 5, goalsAgainst: 9, points: 4 },
            { position: 5, name: 'Красноярск', games: 5, wins: 0, draws: 0, losses: 5, goalsFor: 2, goalsAgainst: 14, points: 0 }
          ]
        }
      ]
    }
  ];

  // Данные из ФФНСО
  const ffnsoTournaments = [
    {
      id: 1,
      name: 'Чемпионат НСО 2024',
      status: 'active',
      tables: [
        {
          id: 1,
          name: 'Высшая лига',
          teams: [
            { position: 1, name: 'Новосибирск', games: 6, wins: 5, draws: 1, losses: 0, goalsFor: 15, goalsAgainst: 4, points: 16 },
            { position: 2, name: 'Бердск', games: 6, wins: 4, draws: 2, losses: 0, goalsFor: 12, goalsAgainst: 5, points: 14 },
            { position: 3, name: 'Искитим', games: 6, wins: 3, draws: 2, losses: 1, goalsFor: 10, goalsAgainst: 6, points: 11 },
            { position: 4, name: 'Куйбышев', games: 6, wins: 2, draws: 1, losses: 3, goalsFor: 8, goalsAgainst: 10, points: 7 },
            { position: 5, name: 'Тогучин', games: 6, wins: 1, draws: 1, losses: 4, goalsFor: 5, goalsAgainst: 12, points: 4 }
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2a7a2a] to-[#1a5f1a] py-12 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#ffd700]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8b0000]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#ffd700] mb-4 drop-shadow-lg">Турнирные таблицы</h1>
          <div className="w-24 h-1 bg-[#ffd700] mx-auto mb-6"></div>
          <p className="text-xl text-[#ffd700]/90">
            Результаты и статистика турниров
          </p>
        </div>

        {/* Переключатель турниров */}
        <div className="flex justify-center mb-8">
          <div className="bg-[#2a7a2a]/40 backdrop-blur-sm rounded-lg p-1 border border-[#ffd700]/20 shadow-lg">
            <button
              onClick={() => setActiveTab('siberia')}
              className={`px-8 py-3 rounded-md transition-all duration-300 ${
                activeTab === 'siberia'
                  ? 'bg-[#8b0000] text-[#ffd700] shadow-md'
                  : 'text-[#ffd700]/80 hover:text-[#ffd700] hover:bg-[#2a7a2a]/60'
              }`}
            >
              СФФ Сибирь
            </button>
            <button
              onClick={() => setActiveTab('ffnso')}
              className={`px-8 py-3 rounded-md transition-all duration-300 ${
                activeTab === 'ffnso'
                  ? 'bg-[#8b0000] text-[#ffd700] shadow-md'
                  : 'text-[#ffd700]/80 hover:text-[#ffd700] hover:bg-[#2a7a2a]/60'
              }`}
            >
              ФФНСО
            </button>
          </div>
        </div>

        {/* Турнирные таблицы */}
        <div className="space-y-8">
          {(activeTab === 'siberia' ? siberiaTournaments : ffnsoTournaments).map((tournament) => (
            <div key={tournament.id} className="bg-[#2a7a2a]/40 backdrop-blur-sm rounded-2xl p-8 border border-[#ffd700]/20">
              <div className="flex items-center mb-6">
                <Trophy className="w-6 h-6 text-[#ffd700] mr-3" />
                <h2 className="text-2xl font-bold text-[#ffd700]">{tournament.name}</h2>
              </div>

              {tournament.tables.map((table) => (
                <div key={table.id} className="overflow-x-auto">
                  <h3 className="text-xl font-semibold text-[#ffd700] mb-4">{table.name}</h3>
                  <table className="w-full">
                    <thead>
                      <tr className="text-[#ffd700] border-b border-[#ffd700]/20">
                        <th className="py-3 px-4 text-left">#</th>
                        <th className="py-3 px-4 text-left">Команда</th>
                        <th className="py-3 px-4 text-center">И</th>
                        <th className="py-3 px-4 text-center">В</th>
                        <th className="py-3 px-4 text-center">Н</th>
                        <th className="py-3 px-4 text-center">П</th>
                        <th className="py-3 px-4 text-center">М</th>
                        <th className="py-3 px-4 text-center">О</th>
                      </tr>
                    </thead>
                    <tbody>
                      {table.teams.map((team) => (
                        <tr key={team.position} className="border-b border-[#ffd700]/10 hover:bg-[#2a7a2a]/60 transition-colors">
                          <td className="py-3 px-4 text-[#ffd700]">{team.position}</td>
                          <td className="py-3 px-4 text-[#ffd700] font-medium">{team.name}</td>
                          <td className="py-3 px-4 text-center text-[#ffd700]/80">{team.games}</td>
                          <td className="py-3 px-4 text-center text-[#ffd700]/80">{team.wins}</td>
                          <td className="py-3 px-4 text-center text-[#ffd700]/80">{team.draws}</td>
                          <td className="py-3 px-4 text-center text-[#ffd700]/80">{team.losses}</td>
                          <td className="py-3 px-4 text-center text-[#ffd700]/80">{team.goalsFor}:{team.goalsAgainst}</td>
                          <td className="py-3 px-4 text-center text-[#ffd700] font-semibold">{team.points}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tournaments;
