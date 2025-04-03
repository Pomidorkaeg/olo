import React from 'react';
import { Calendar, Clock, User, ChevronRight } from 'lucide-react';

const News = () => {
  const news = [
    {
      id: 1,
      title: 'Победа над "Нартом"',
      content: 'Наша команда одержала уверенную победу над "Нартом" со счетом 2:0. Голы забили Иванов и Петров.',
      date: '2024-03-15',
      time: '19:00',
      author: 'Пресс-служба ФК Гудаута',
      image: '/images/news/match-victory.jpg',
      category: 'Матчи'
    },
    {
      id: 2,
      title: 'Новый форвард в команде',
      content: 'ФК "Гудаута" подписал контракт с талантливым нападающим Смирновым. Игрок уже приступил к тренировкам.',
      date: '2024-03-10',
      time: '15:30',
      author: 'Пресс-служба ФК Гудаута',
      image: '/images/news/new-player.jpg',
      category: 'Трансферы'
    },
    {
      id: 3,
      title: 'Подготовка к новому сезону',
      content: 'Команда начала подготовку к предстоящему сезону. Тренерский штаб определил основные задачи на предсезонный период.',
      date: '2024-03-05',
      time: '12:00',
      author: 'Пресс-служба ФК Гудаута',
      image: '/images/news/pre-season.jpg',
      category: 'Тренировки'
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
          <h1 className="text-4xl font-bold text-[#ffd700] mb-4 drop-shadow-lg">Новости</h1>
          <div className="w-24 h-1 bg-[#ffd700] mx-auto mb-6"></div>
          <p className="text-xl text-[#ffd700]/90">
            Последние события и обновления
          </p>
        </div>

        {/* Сетка новостей */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <article
              key={item.id}
              className="bg-[#1a472a]/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#ffd700]/20 hover:border-[#ffd700]/40 transition-all duration-300 group hover:shadow-lg hover:shadow-[#1a472a]/20"
            >
              {/* Изображение */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-[#8b0000] text-[#ffd700] text-sm font-semibold rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Контент */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-[#ffd700] mb-3 group-hover:text-[#ffd700]/90 transition-colors">
                  {item.title}
                </h2>
                <p className="text-[#ffd700]/80 mb-4 line-clamp-3">
                  {item.content}
                </p>

                {/* Метаданные */}
                <div className="flex items-center justify-between text-[#ffd700]/60 text-sm mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{new Date(item.date).toLocaleDateString('ru-RU')}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{item.time}</span>
                  </div>
                </div>

                {/* Автор */}
                <div className="flex items-center text-[#ffd700]/80 text-sm mb-4">
                  <User className="w-4 h-4 mr-2" />
                  <span>{item.author}</span>
                </div>

                {/* Кнопка "Читать далее" */}
                <button className="flex items-center text-[#ffd700] hover:text-[#ffd700]/80 transition-colors">
                  <span className="mr-2">Читать далее</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
