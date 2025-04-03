import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          Страница не найдена
        </p>
        <Link to="/" className="text-emerald-600 hover:text-emerald-800 underline">
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
