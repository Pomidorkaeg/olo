import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navigation = [
    { name: 'Главная', href: '/' },
    { name: 'Турниры', href: '/tournaments' },
    { name: 'Матчи', href: '/matches' },
    { name: 'Новости', href: '/news' },
    { name: 'Медиа', href: '/media' },
    { name: 'Контакты', href: '/contacts' },
  ];
  
  return (
    <nav className="bg-emerald-900 border-b border-emerald-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-emerald-100">ФК ГУДАУТА</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-emerald-100 hover:text-emerald-300 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-emerald-100 hover:text-emerald-300 hover:bg-emerald-800"
            >
              <span className="sr-only">Открыть меню</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={cn(
        "md:hidden",
        isOpen ? "block" : "hidden"
      )}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-emerald-900 border-b border-emerald-800">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-emerald-100 hover:text-emerald-300 hover:bg-emerald-800"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 