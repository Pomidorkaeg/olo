import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import TournamentManager from '../components/admin/TournamentManager';
import TeamManager from '../components/admin/TeamManager';
import NewsManager from '../components/admin/NewsManager';

const AdminPanel: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('tournaments');

  useEffect(() => {
    if (!isAuthenticated || !user?.isAdmin) {
      navigate('/login');
    }
    setIsLoading(false);
  }, [isAuthenticated, user, navigate]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Ошибка выхода:', error);
    }
  };

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold">Панель администратора</h1>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <button
                  onClick={() => setActiveTab('tournaments')}
                  className={`${
                    activeTab === 'tournaments'
                      ? 'border-blue-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  Турниры
                </button>
                <button
                  onClick={() => setActiveTab('team')}
                  className={`${
                    activeTab === 'team'
                      ? 'border-blue-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  Команда
                </button>
                <button
                  onClick={() => setActiveTab('news')}
                  className={`${
                    activeTab === 'news'
                      ? 'border-blue-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  Новости
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 mr-4">{user?.name}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-600"
              >
                Выйти
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {activeTab === 'tournaments' ? (
          <TournamentManager />
        ) : activeTab === 'team' ? (
          <TeamManager />
        ) : (
          <NewsManager />
        )}
      </div>
    </div>
  );
};

export default AdminPanel; 