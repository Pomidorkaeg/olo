import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ChevronRight, ChevronLeft, Trophy } from 'lucide-react';

const Matches = () => {
  const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth());
  const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

  const matches = [
    {
      id: 1,
      date: '2024-03-15',
      time: '19:00',
      location: 'Стадион "Динамо", Гудаута',
      homeTeam: 'ФК ГУДАУТА',
      awayTeam: 'Нарт',
      status: 'upcoming',
      tournament: 'Чемпионат Абхазии',
    },
    {
      id: 2,
      date: '2024-03-10',
      time: '18:00',
      location: 'Стадион "Динамо", Сухум',
      homeTeam: 'Динамо',
      awayTeam: 'ФК ГУДАУТА',
      status: 'completed',
      score: { home: 1, away: 2 },
      scorers: ['Иванов (23\')', 'Петров (67\')'],
      tournament: 'Кубок Абхазии',
    },
    {
      id: 3,
      date: '2024-03-05',
      time: '17:30',
      location: 'Стадион "Динамо", Гудаута',
      homeTeam: 'ФК ГУДАУТА',
      awayTeam: 'Афон',
      status: 'completed',
      score: { home: 3, away: 1 },
      scorers: ['Смирнов (15\', 34\')', 'Иванов (78\')'],
      tournament: 'Чемпионат Абхазии',
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a472a] to-[#006400] py-12 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#ffd700]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8b0000]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#ffd700] mb-4 drop-shadow-lg">Матчи</h1>
          <div className="w-24 h-1 bg-[#ffd700] mx-auto mb-6"></div>
          <p className="text-xl text-[#ffd700]/90">
            Расписание и результаты матчей
          </p>
        </div>

        {/* Переключатель месяцев */}
        <div className="flex items-center justify-center mb-8 bg-[#1a472a]/40 backdrop-blur-sm rounded-lg p-2 max-w-md mx-auto border border-[#ffd700]/20">
          <button
            onClick={() => setSelectedMonth(prev => (prev === 0 ? 11 : prev - 1))}
            className="p-2 text-[#ffd700] hover:text-[#ffd700]/80 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <span className="text-[#ffd700] font-semibold px-4 min-w-[150px] text-center">
            {months[selectedMonth]}
          </span>
          <button
            onClick={() => setSelectedMonth(prev => (prev === 11 ? 0 : prev + 1))}
            className="p-2 text-[#ffd700] hover:text-[#ffd700]/80 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Список матчей */}
        <div className="space-y-6">
          {matches.map((match) => (
            <div
              key={match.id}
              className="bg-[#1a472a]/40 backdrop-blur-sm rounded-2xl p-6 border border-[#ffd700]/20 hover:border-[#ffd700]/40 transition-all duration-300 group hover:shadow-lg hover:shadow-[#1a472a]/20"
            >
              {/* Турнир */}
              <div className="flex items-center mb-4">
                <Trophy className="w-5 h-5 text-[#ffd700] mr-2" />
                <span className="text-[#ffd700] font-medium">{match.tournament}</span>
              </div>

              {/* Основная информация о матче */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div className="text-center md:text-right">
                  <h3 className="text-xl font-bold text-[#ffd700]">{match.homeTeam}</h3>
                </div>

                <div className="text-center space-y-2">
                  {match.status === 'completed' ? (
                    <>
                      <div className="text-3xl font-bold text-[#8b0000]">
                        {match.score.home} : {match.score.away}
                      </div>
                      <div className="text-sm text-[#ffd700]/60">
                        {match.scorers.join(', ')}
                      </div>
                    </>
                  ) : (
                    <div className="text-2xl font-bold text-[#8b0000]">VS</div>
                  )}
                </div>

                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold text-[#ffd700]">{match.awayTeam}</h3>
                </div>
              </div>

              {/* Детали матча */}
              <div className="mt-4 pt-4 border-t border-[#ffd700]/20 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center justify-center sm:justify-start text-[#ffd700]/80">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{new Date(match.date).toLocaleDateString('ru-RU')}</span>
                </div>
                <div className="flex items-center justify-center text-[#ffd700]/80">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{match.time}</span>
                </div>
                <div className="flex items-center justify-center sm:justify-end text-[#ffd700]/80">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{match.location}</span>
                </div>
              </div>

              {/* Статус матча */}
              <div className="absolute top-4 right-4">
                {match.status === 'upcoming' ? (
                  <span className="px-3 py-1 bg-[#8b0000] text-[#ffd700] text-sm font-semibold rounded-full">
                    Скоро
                  </span>
                ) : (
                  <span className="px-3 py-1 bg-[#1a472a] text-[#ffd700] text-sm font-semibold rounded-full">
                    Завершен
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Matches;
