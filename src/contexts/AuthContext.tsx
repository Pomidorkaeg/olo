import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  isAdmin: boolean;
  name: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Проверяем наличие сохраненной сессии
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (token) {
          // Здесь должна быть проверка токена на сервере
          // const response = await fetch('/api/auth/verify', {
          //   headers: { Authorization: `Bearer ${token}` }
          // });
          // const userData = await response.json();
          // setUser(userData);
        }
      } catch (error) {
        console.error('Ошибка проверки аутентификации:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // Здесь должен быть запрос к API для аутентификации
      // const response = await fetch('/api/auth/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, password })
      // });
      // const data = await response.json();
      
      // Временная заглушка для демонстрации
      const mockUser = {
        id: '1',
        email,
        isAdmin: true,
        name: 'Администратор'
      };
      
      setUser(mockUser);
      localStorage.setItem('authToken', 'mock-token');
    } catch (error) {
      console.error('Ошибка входа:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      // Здесь должен быть запрос к API для выхода
      // await fetch('/api/auth/logout', { method: 'POST' });
      
      setUser(null);
      localStorage.removeItem('authToken');
    } catch (error) {
      console.error('Ошибка выхода:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth должен использоваться внутри AuthProvider');
  }
  return context;
}; 