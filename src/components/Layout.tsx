import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Trophy, Newspaper, Image, Users, Phone, Menu, X } from 'lucide-react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/', icon: Home, label: 'Главная' },
    { path: '/tournaments', icon: Trophy, label: 'Турнирные таблицы' },
    { path: '/news', icon: Newspaper, label: 'Новости' },
    { path: '/media', icon: Image, label: 'Медиа' },
    { path: '/team', icon: Users, label: 'Команда' },
    { path: '/contacts', icon: Phone, label: 'Контакты' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Навигация */}
      <nav className="bg-[#2a7a2a] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Логотип */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <img
                  src="/images/logo/logo.jpg"
                  alt="ФК Гудаута"
                  className="h-12 w-12 object-contain rounded-full border-2 border-[#ffd700]"
                />
                <span className="ml-3 text-[#ffd700] font-bold text-xl">ФК Гудаута</span>
              </Link>
            </div>

            {/* Навигационные ссылки */}
            <div className="hidden md:flex space-x-4">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                      location.pathname === link.path
                        ? 'bg-[#8b0000] text-[#ffd700]'
                        : 'text-[#ffd700]/80 hover:text-[#ffd700] hover:bg-[#2a7a2a]/60'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Основной контент */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Футер */}
      <footer className="bg-[#2a7a2a] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="/images/logo/logo.jpg"
                alt="ФК Гудаута"
                className="h-10 w-10 object-contain rounded-full border border-[#ffd700]"
              />
              <span className="ml-3 text-[#ffd700]/90">© 2024 ФК Гудаута. Все права защищены.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 