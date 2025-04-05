import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Calendar, Newspaper, ArrowRight, Star } from 'lucide-react';
// Импортируем фотографию команды
import teamPhoto from '@assets/images/team.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a472a] via-[#2a7a2a] to-[#1a5f1a] py-12 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[#ffd700] opacity-[0.02] bg-[radial-gradient(circle,_transparent_20%,_#ffd700_20%,_#ffd700_80%,_transparent_80%,_transparent),radial-gradient(circle,_transparent_20%,_#ffd700_20%,_#ffd700_80%,_transparent_80%,_transparent)_30px_30px] bg-[length:60px_60px]"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#ffd700]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#8b0000]/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Приветственная секция */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full border border-[#ffd700]/20 bg-[#ffd700]/5 backdrop-blur-sm">
            <Star className="w-4 h-4 text-[#ffd700] mr-2" />
            <span className="text-sm font-medium text-[#ffd700]">Футбольный клуб Гудаута</span>
          </div>
          <h1 className="text-6xl font-bold text-[#ffd700] mb-6 drop-shadow-lg tracking-tight">
            Добро пожаловать на<br />официальный сайт
          </h1>
          <p className="text-xl text-[#ffd700]/90 max-w-2xl mx-auto leading-relaxed">
            Следите за новостями, результатами и достижениями нашей команды
          </p>
        </div>

        {/* Фотография команды */}
        <div className="mb-20">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#ffd700]/20 backdrop-blur-sm transform hover:scale-[1.01] transition-all duration-500">
            <img
              src={teamPhoto}
              alt="Команда ФК Гудаута"
              className="w-full h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a472a] via-[#1a472a]/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-10 text-[#ffd700]">
              <h2 className="text-3xl font-bold mb-3">Наша команда</h2>
              <p className="text-[#ffd700]/90 text-lg max-w-2xl">
                Сила в единстве и стремлении к победе
              </p>
            </div>
          </div>
        </div>

        {/* Быстрые ссылки */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Link
            to="/tournaments"
            className="group bg-[#1a472a]/40 backdrop-blur-sm rounded-2xl p-8 border border-[#ffd700]/20 hover:border-[#ffd700]/40 transition-all duration-500 hover:shadow-lg hover:shadow-[#ffd700]/5 hover:-translate-y-1"
          >
            <div className="bg-[#ffd700]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Trophy className="w-8 h-8 text-[#ffd700]" />
            </div>
            <h3 className="text-2xl font-bold text-[#ffd700] mb-3">Турнирные таблицы</h3>
            <p className="text-[#ffd700]/80 mb-6 leading-relaxed">Следите за результатами и турнирным положением команды</p>
            <div className="flex items-center text-[#ffd700]/60 group-hover:text-[#ffd700] transition-colors">
              <span className="font-medium">Подробнее</span>
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-500" />
            </div>
          </Link>

          <Link
            to="/news"
            className="group bg-[#1a472a]/40 backdrop-blur-sm rounded-2xl p-8 border border-[#ffd700]/20 hover:border-[#ffd700]/40 transition-all duration-500 hover:shadow-lg hover:shadow-[#ffd700]/5 hover:-translate-y-1"
          >
            <div className="bg-[#ffd700]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Newspaper className="w-8 h-8 text-[#ffd700]" />
            </div>
            <h3 className="text-2xl font-bold text-[#ffd700] mb-3">Новости</h3>
            <p className="text-[#ffd700]/80 mb-6 leading-relaxed">Будьте в курсе последних событий и новостей клуба</p>
            <div className="flex items-center text-[#ffd700]/60 group-hover:text-[#ffd700] transition-colors">
              <span className="font-medium">Подробнее</span>
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-500" />
            </div>
          </Link>

          <Link
            to="/team"
            className="group bg-[#1a472a]/40 backdrop-blur-sm rounded-2xl p-8 border border-[#ffd700]/20 hover:border-[#ffd700]/40 transition-all duration-500 hover:shadow-lg hover:shadow-[#ffd700]/5 hover:-translate-y-1"
          >
            <div className="bg-[#ffd700]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Calendar className="w-8 h-8 text-[#ffd700]" />
            </div>
            <h3 className="text-2xl font-bold text-[#ffd700] mb-3">Команда</h3>
            <p className="text-[#ffd700]/80 mb-6 leading-relaxed">Познакомьтесь с игроками и тренерским составом</p>
            <div className="flex items-center text-[#ffd700]/60 group-hover:text-[#ffd700] transition-colors">
              <span className="font-medium">Подробнее</span>
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-500" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
