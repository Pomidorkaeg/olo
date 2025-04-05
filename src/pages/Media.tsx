import React, { useState } from 'react';
import { LayoutGrid, List, Image, Play, Calendar } from 'lucide-react';

const Media = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const mediaItems = [
    {
      id: 1,
      type: 'image',
      title: 'Победа над "Нартом"',
      date: '2024-03-15',
      url: '/images/media/match-victory.jpg'
    },
    {
      id: 2,
      type: 'video',
      title: 'Интервью с главным тренером',
      date: '2024-03-10',
      url: '/images/media/coach-interview.jpg'
    },
    {
      id: 3,
      type: 'image',
      title: 'Тренировка команды',
      date: '2024-03-05',
      url: '/images/media/training.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#ffd700]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8b0000]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1a472a] mb-4 drop-shadow-lg">Медиа</h1>
          <div className="w-24 h-1 bg-[#1a472a] mx-auto mb-6"></div>
          <p className="text-xl text-[#1a472a]/90">
            Фото и видео материалы
          </p>
        </div>

        {/* Переключатель режима просмотра */}
        <div className="flex justify-end mb-8">
          <div className="bg-[#1a472a]/40 backdrop-blur-sm rounded-lg p-1 border border-[#ffd700]/20">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-md transition-all duration-300 ${
                viewMode === 'grid'
                  ? 'bg-[#8b0000] text-[#ffd700]'
                  : 'text-[#ffd700]/80 hover:text-[#ffd700]'
              }`}
            >
              <LayoutGrid className="w-5 h-5 inline-block mr-2" />
              Сетка
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-md transition-all duration-300 ${
                viewMode === 'list'
                  ? 'bg-[#8b0000] text-[#ffd700]'
                  : 'text-[#ffd700]/80 hover:text-[#ffd700]'
              }`}
            >
              <List className="w-5 h-5 inline-block mr-2" />
              Список
            </button>
          </div>
        </div>

        {/* Сетка медиа */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#1a472a]/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#ffd700]/20 hover:border-[#ffd700]/40 transition-all duration-300 group hover:shadow-lg hover:shadow-[#1a472a]/20"
              >
                {/* Изображение/превью */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <Play className="w-12 h-12 text-[#ffd700]" />
                    </div>
                  )}
                </div>

                {/* Информация */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-[#ffd700] mb-2">{item.title}</h2>
                  <div className="flex items-center text-[#ffd700]/60 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{new Date(item.date).toLocaleDateString('ru-RU')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {mediaItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#1a472a]/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#ffd700]/20 hover:border-[#ffd700]/40 transition-all duration-300 group hover:shadow-lg hover:shadow-[#1a472a]/20"
              >
                <div className="flex">
                  {/* Изображение/превью */}
                  <div className="relative w-48 h-32 overflow-hidden">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <Play className="w-8 h-8 text-[#ffd700]" />
                      </div>
                    )}
                  </div>

                  {/* Информация */}
                  <div className="flex-1 p-6">
                    <h2 className="text-xl font-bold text-[#ffd700] mb-2">{item.title}</h2>
                    <div className="flex items-center text-[#ffd700]/60 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{new Date(item.date).toLocaleDateString('ru-RU')}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Media;