import React, { useState } from 'react';

interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: string;
  image?: string;
  category: 'news' | 'announcement' | 'achievement';
  isPublished: boolean;
}

const NewsManager: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [editingNews, setEditingNews] = useState<NewsItem | null>(null);
  const [newNews, setNewNews] = useState<Partial<NewsItem>>({
    category: 'news',
    isPublished: false
  });

  const handleCreateNews = async () => {
    try {
      // Здесь должен быть запрос к API для создания новости
      // const response = await fetch('/api/news', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(newNews)
      // });
      // const data = await response.json();
      
      // Временная заглушка для демонстрации
      const mockNews: NewsItem = {
        id: Date.now().toString(),
        title: newNews.title || '',
        content: newNews.content || '',
        date: newNews.date || new Date().toISOString().split('T')[0],
        image: newNews.image,
        category: newNews.category || 'news',
        isPublished: newNews.isPublished || false
      };
      
      setNews([...news, mockNews]);
      setIsCreating(false);
      setNewNews({ category: 'news', isPublished: false });
    } catch (error) {
      console.error('Ошибка создания новости:', error);
    }
  };

  const handleUpdateNews = async (newsItem: NewsItem) => {
    try {
      // Здесь должен быть запрос к API для обновления новости
      // await fetch(`/api/news/${newsItem.id}`, {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(newsItem)
      // });
      
      setNews(news.map(n => 
        n.id === newsItem.id ? newsItem : n
      ));
      setEditingNews(null);
    } catch (error) {
      console.error('Ошибка обновления новости:', error);
    }
  };

  const handleDeleteNews = async (id: string) => {
    try {
      // Здесь должен быть запрос к API для удаления новости
      // await fetch(`/api/news/${id}`, { method: 'DELETE' });
      
      setNews(news.filter(n => n.id !== id));
    } catch (error) {
      console.error('Ошибка удаления новости:', error);
    }
  };

  const handleTogglePublish = async (newsItem: NewsItem) => {
    try {
      // Здесь должен быть запрос к API для обновления статуса публикации
      // await fetch(`/api/news/${newsItem.id}/toggle-publish`, {
      //   method: 'PATCH',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ isPublished: !newsItem.isPublished })
      // });
      
      setNews(news.map(n => 
        n.id === newsItem.id ? { ...n, isPublished: !n.isPublished } : n
      ));
    } catch (error) {
      console.error('Ошибка изменения статуса публикации:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Управление новостями</h2>
        <button
          onClick={() => setIsCreating(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Добавить новость
        </button>
      </div>

      {(isCreating || editingNews) && (
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">
            {editingNews ? 'Редактирование новости' : 'Добавление новой новости'}
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Заголовок</label>
              <input
                type="text"
                value={editingNews?.title || newNews.title || ''}
                onChange={(e) => {
                  if (editingNews) {
                    setEditingNews({ ...editingNews, title: e.target.value });
                  } else {
                    setNewNews({ ...newNews, title: e.target.value });
                  }
                }}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Категория</label>
              <select
                value={editingNews?.category || newNews.category || 'news'}
                onChange={(e) => {
                  if (editingNews) {
                    setEditingNews({ ...editingNews, category: e.target.value as NewsItem['category'] });
                  } else {
                    setNewNews({ ...newNews, category: e.target.value as NewsItem['category'] });
                  }
                }}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="news">Новость</option>
                <option value="announcement">Объявление</option>
                <option value="achievement">Достижение</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Дата</label>
              <input
                type="date"
                value={editingNews?.date || newNews.date || new Date().toISOString().split('T')[0]}
                onChange={(e) => {
                  if (editingNews) {
                    setEditingNews({ ...editingNews, date: e.target.value });
                  } else {
                    setNewNews({ ...newNews, date: e.target.value });
                  }
                }}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Изображение URL</label>
              <input
                type="text"
                value={editingNews?.image || newNews.image || ''}
                onChange={(e) => {
                  if (editingNews) {
                    setEditingNews({ ...editingNews, image: e.target.value });
                  } else {
                    setNewNews({ ...newNews, image: e.target.value });
                  }
                }}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Содержание</label>
              <textarea
                value={editingNews?.content || newNews.content || ''}
                onChange={(e) => {
                  if (editingNews) {
                    setEditingNews({ ...editingNews, content: e.target.value });
                  } else {
                    setNewNews({ ...newNews, content: e.target.value });
                  }
                }}
                rows={5}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={editingNews?.isPublished || newNews.isPublished || false}
                onChange={(e) => {
                  if (editingNews) {
                    setEditingNews({ ...editingNews, isPublished: e.target.checked });
                  } else {
                    setNewNews({ ...newNews, isPublished: e.target.checked });
                  }
                }}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-900">
                Опубликовать
              </label>
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => {
                  setIsCreating(false);
                  setEditingNews(null);
                }}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Отмена
              </button>
              <button
                onClick={() => {
                  if (editingNews) {
                    handleUpdateNews(editingNews);
                  } else {
                    handleCreateNews();
                  }
                }}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                {editingNews ? 'Сохранить' : 'Создать'}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {news.map((newsItem) => (
          <div key={newsItem.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">{newsItem.title}</h3>
                  <p className="text-sm text-gray-500">
                    {newsItem.category === 'news' ? 'Новость' :
                     newsItem.category === 'announcement' ? 'Объявление' : 'Достижение'}
                  </p>
                  <p className="text-sm text-gray-500">{newsItem.date}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleTogglePublish(newsItem)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      newsItem.isPublished
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {newsItem.isPublished ? 'Опубликовано' : 'Черновик'}
                  </button>
                  <button
                    onClick={() => setEditingNews(newsItem)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Редактировать
                  </button>
                  <button
                    onClick={() => handleDeleteNews(newsItem.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Удалить
                  </button>
                </div>
              </div>
              {newsItem.image && (
                <img
                  src={newsItem.image}
                  alt={newsItem.title}
                  className="mt-4 w-full h-48 object-cover rounded"
                />
              )}
              <p className="mt-4 text-gray-600 whitespace-pre-wrap">{newsItem.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsManager; 