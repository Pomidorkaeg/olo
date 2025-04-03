import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Settings, 
  Trophy, 
  Calendar, 
  Users, 
  FileText, 
  Layout,
  Save,
  Image
} from 'lucide-react';
import { useSite } from '../../contexts/SiteContext';

interface ContentSection {
  id: string;
  title: string;
  content: string;
}

const AdminDashboard = () => {
  const { heroContent, updateHeroContent, sections, updateSection } = useSite();

  const handleSaveHero = () => {
    updateHeroContent(heroContent);
  };

  const handleSaveSection = (section: ContentSection) => {
    updateSection(section);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-2xl font-bold text-emerald-800">Админ панель</h1>
            <nav className="flex space-x-4">
              <Link to="/" className="text-gray-600 hover:text-emerald-600">
                Просмотр сайта
              </Link>
            </nav>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Основные секции */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-2xl">
            <div className="p-6">
              <div className="flex items-center">
                <Layout className="h-6 w-6 text-emerald-600" />
                <h2 className="ml-3 text-xl font-semibold text-gray-900">Главная секция</h2>
              </div>
              
              <div className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Заголовок
                  </label>
                  <input
                    type="text"
                    value={heroContent.title}
                    onChange={(e) => updateHeroContent({...heroContent, title: e.target.value})}
                    className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Описание
                  </label>
                  <textarea
                    value={heroContent.description}
                    onChange={(e) => updateHeroContent({...heroContent, description: e.target.value})}
                    rows={3}
                    className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    URL фонового изображения
                  </label>
                  <div className="mt-1 flex rounded-xl shadow-sm">
                    <input
                      type="text"
                      value={heroContent.backgroundImage}
                      onChange={(e) => updateHeroContent({...heroContent, backgroundImage: e.target.value})}
                      className="flex-1 rounded-l-xl border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                    <button className="inline-flex items-center px-4 py-2 border border-l-0 border-gray-300 rounded-r-xl bg-gray-50 text-gray-700 hover:bg-gray-100">
                      <Image className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Быстрые действия */}
          <div className="bg-white overflow-hidden shadow rounded-2xl">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Быстрые действия</h2>
              <div className="grid grid-cols-2 gap-4">
                <Link
                  to="/admin/tournaments"
                  className="flex flex-col items-center p-4 rounded-xl border-2 border-emerald-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all"
                >
                  <Trophy className="h-8 w-8 text-emerald-600" />
                  <span className="mt-2 text-sm font-medium text-gray-900">Турниры</span>
                </Link>
                
                <Link
                  to="/admin/matches"
                  className="flex flex-col items-center p-4 rounded-xl border-2 border-emerald-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all"
                >
                  <Calendar className="h-8 w-8 text-emerald-600" />
                  <span className="mt-2 text-sm font-medium text-gray-900">Матчи</span>
                </Link>
                
                <Link
                  to="/admin/players"
                  className="flex flex-col items-center p-4 rounded-xl border-2 border-emerald-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all"
                >
                  <Users className="h-8 w-8 text-emerald-600" />
                  <span className="mt-2 text-sm font-medium text-gray-900">Игроки</span>
                </Link>
                
                <Link
                  to="/admin/news"
                  className="flex flex-col items-center p-4 rounded-xl border-2 border-emerald-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all"
                >
                  <FileText className="h-8 w-8 text-emerald-600" />
                  <span className="mt-2 text-sm font-medium text-gray-900">Новости</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Настройки */}
          <div className="bg-white overflow-hidden shadow rounded-2xl">
            <div className="p-6">
              <div className="flex items-center mb-6">
                <Settings className="h-6 w-6 text-emerald-600" />
                <h2 className="ml-3 text-xl font-semibold text-gray-900">Настройки</h2>
              </div>
              
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-50">
                  <span className="text-sm font-medium text-gray-700">Общие настройки</span>
                  <Settings className="h-5 w-5 text-gray-400" />
                </button>
                
                <button className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-50">
                  <span className="text-sm font-medium text-gray-700">Пользователи</span>
                  <Users className="h-5 w-5 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Редактор секций */}
        <div className="bg-white shadow rounded-2xl overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Секции сайта</h2>
            <div className="space-y-6">
              {sections.map((section) => (
                <div key={section.id} className="border-b border-gray-200 pb-6">
                  <div className="flex items-center justify-between mb-4">
                    <input
                      type="text"
                      value={section.title}
                      onChange={(e) => updateSection({...section, title: e.target.value})}
                      className="text-lg font-medium text-gray-900 border-none focus:ring-0 w-full"
                    />
                  </div>
                  
                  <textarea
                    value={section.content}
                    onChange={(e) => updateSection({...section, content: e.target.value})}
                    rows={4}
                    className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard; 