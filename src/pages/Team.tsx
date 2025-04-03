import React, { useState } from 'react';
import { UserCircle, Trophy, Users, GraduationCap } from 'lucide-react';

const Team = () => {
  const [activeTab, setActiveTab] = useState<'gudauta' | 'school'>('gudauta');

  // Данные для ФК Гудаута
  const gudautaTeam = {
    players: [
      { id: 1, name: 'Александр Петров', position: 'Вратарь', experience: '5 лет', image: '/images/team/player1.jpg' },
      { id: 2, name: 'Дмитрий Иванов', position: 'Защитник', experience: '8 лет', image: '/images/team/player2.jpg' },
      { id: 3, name: 'Михаил Сидоров', position: 'Полузащитник', experience: '6 лет', image: '/images/team/player3.jpg' },
      { id: 4, name: 'Андрей Николаев', position: 'Нападающий', experience: '7 лет', image: '/images/team/player4.jpg' },
      { id: 5, name: 'Иван Кузнецов', position: 'Защитник', experience: '4 года', image: '/images/team/player5.jpg' },
      { id: 6, name: 'Сергей Попов', position: 'Полузащитник', experience: '5 лет', image: '/images/team/player6.jpg' }
    ],
    coaches: [
      { id: 1, name: 'Алексей Смирнов', position: 'Главный тренер', experience: '15 лет', image: '/images/team/coach1.jpg' },
      { id: 2, name: 'Дмитрий Волков', position: 'Тренер вратарей', experience: '10 лет', image: '/images/team/coach2.jpg' }
    ]
  };

  // Данные для СШ Гудаута
  const schoolTeam = {
    players: [
      { id: 1, name: 'Артём Соколов', position: 'Вратарь', experience: '3 года', image: '/images/team/player7.jpg' },
      { id: 2, name: 'Егор Морозов', position: 'Защитник', experience: '4 года', image: '/images/team/player8.jpg' },
      { id: 3, name: 'Даниил Васильев', position: 'Полузащитник', experience: '3 года', image: '/images/team/player9.jpg' },
      { id: 4, name: 'Максим Новиков', position: 'Нападающий', experience: '4 года', image: '/images/team/player10.jpg' },
      { id: 5, name: 'Кирилл Соловьёв', position: 'Защитник', experience: '3 года', image: '/images/team/player11.jpg' },
      { id: 6, name: 'Александр Козлов', position: 'Полузащитник', experience: '4 года', image: '/images/team/player12.jpg' }
    ],
    coaches: [
      { id: 1, name: 'Игорь Медведев', position: 'Главный тренер', experience: '12 лет', image: '/images/team/coach3.jpg' },
      { id: 2, name: 'Андрей Соколов', position: 'Тренер вратарей', experience: '8 лет', image: '/images/team/coach4.jpg' }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2a7a2a] to-[#1a5f1a] py-12 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#ffd700]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8b0000]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Логотип и заголовок */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-48 h-48 relative">
              <img
                src="/images/logo/logo.jpg"
                alt="ФК Гудаута"
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-[#ffd700] mb-4 drop-shadow-lg">Наша команда</h1>
          <div className="w-24 h-1 bg-[#ffd700] mx-auto mb-6"></div>
          <p className="text-xl text-[#ffd700]/90">
            Познакомьтесь с игроками и тренерами
          </p>
        </div>

        {/* Переключатель команд */}
        <div className="flex justify-center mb-8">
          <div className="bg-[#2a7a2a]/40 backdrop-blur-sm rounded-lg p-1 border border-[#ffd700]/20 shadow-lg">
            <button
              onClick={() => setActiveTab('gudauta')}
              className={`px-8 py-3 rounded-md transition-all duration-300 flex items-center space-x-2 ${
                activeTab === 'gudauta'
                  ? 'bg-[#8b0000] text-[#ffd700] shadow-md'
                  : 'text-[#ffd700]/80 hover:text-[#ffd700] hover:bg-[#2a7a2a]/60'
              }`}
            >
              <Users className="w-5 h-5" />
              <span>ФК Гудаута</span>
            </button>
            <button
              onClick={() => setActiveTab('school')}
              className={`px-8 py-3 rounded-md transition-all duration-300 flex items-center space-x-2 ${
                activeTab === 'school'
                  ? 'bg-[#8b0000] text-[#ffd700] shadow-md'
                  : 'text-[#ffd700]/80 hover:text-[#ffd700] hover:bg-[#2a7a2a]/60'
              }`}
            >
              <GraduationCap className="w-5 h-5" />
              <span>СШ Гудаута</span>
            </button>
          </div>
        </div>

        {/* Секция команды */}
        <div className="bg-[#2a7a2a]/40 backdrop-blur-sm rounded-2xl p-8 border border-[#ffd700]/20">
          <div className="flex items-center mb-8">
            <Trophy className="w-6 h-6 text-[#ffd700] mr-3" />
            <h2 className="text-2xl font-bold text-[#ffd700]">
              {activeTab === 'gudauta' ? 'ФК Гудаута' : 'СШ Гудаута'}
            </h2>
          </div>

          {/* Игроки */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-[#ffd700] mb-6">Игроки</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(activeTab === 'gudauta' ? gudautaTeam : schoolTeam).players.map((player) => (
                <div key={player.id} className="bg-[#2a7a2a]/40 backdrop-blur-sm rounded-xl p-4 border border-[#ffd700]/20 hover:border-[#ffd700]/40 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-[#ffd700]/10">
                      <img src={player.image} alt={player.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-[#ffd700] font-medium">{player.name}</h4>
                      <p className="text-[#ffd700]/80 text-sm">{player.position}</p>
                      <p className="text-[#ffd700]/60 text-xs mt-1">Опыт: {player.experience}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Тренеры */}
          <div>
            <h3 className="text-xl font-semibold text-[#ffd700] mb-6">Тренеры</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(activeTab === 'gudauta' ? gudautaTeam : schoolTeam).coaches.map((coach) => (
                <div key={coach.id} className="bg-[#2a7a2a]/40 backdrop-blur-sm rounded-xl p-4 border border-[#ffd700]/20 hover:border-[#ffd700]/40 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-[#ffd700]/10">
                      <img src={coach.image} alt={coach.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-[#ffd700] font-medium">{coach.name}</h4>
                      <p className="text-[#ffd700]/80 text-sm">{coach.position}</p>
                      <p className="text-[#ffd700]/60 text-xs mt-1">Опыт: {coach.experience}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
