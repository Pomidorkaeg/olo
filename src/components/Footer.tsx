import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const navigation = {
    main: [
      { name: 'О клубе', href: '/about' },
      { name: 'Команда', href: '/team' },
      { name: 'Турниры', href: '/tournaments' },
      { name: 'Матчи', href: '/matches' },
      { name: 'Новости', href: '/news' },
      { name: 'Медиа', href: '/media' },
      { name: 'Контакты', href: '/contacts' },
    ],
    social: [
      {
        name: 'Facebook',
        href: '#',
        icon: Facebook,
      },
      {
        name: 'Instagram',
        href: '#',
        icon: Instagram,
      },
      {
        name: 'Twitter',
        href: '#',
        icon: Twitter,
      },
      {
        name: 'YouTube',
        href: '#',
        icon: Youtube,
      },
    ],
  };
  
  return (
    <footer className="bg-emerald-900 border-t border-emerald-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-emerald-100 mb-4">О нас</h3>
            <p className="text-emerald-100/80">
              ФК ГУДАУТА - футбольный клуб с богатой историей и традициями, 
              стремящийся к новым победам и достижениям.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-emerald-100 mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-emerald-100/80 hover:text-emerald-300">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/tournaments" className="text-emerald-100/80 hover:text-emerald-300">
                  Турниры
                </Link>
              </li>
              <li>
                <Link to="/matches" className="text-emerald-100/80 hover:text-emerald-300">
                  Матчи
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-emerald-100 mb-4">Контакты</h3>
            <ul className="space-y-2 text-emerald-100/80">
              <li>Адрес: г. Гудаута</li>
              <li>Телефон: +7 (XXX) XXX-XX-XX</li>
              <li>Email: info@fcgudauta.ru</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-emerald-800 text-center text-emerald-100/80">
          © 2024 ФК ГУДАУТА. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 