import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);
const AUTH_STORAGE_KEY = 'taskflow-authenticated';

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return localStorage.getItem(AUTH_STORAGE_KEY) === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(AUTH_STORAGE_KEY, isAuthenticated ? 'true' : 'false');
    } catch {
      // ignore storage errors in unsupported environments
    }
  }, [isAuthenticated]);

  const login = ({ email, password }) => {
    if (email === 'user@gmail.com' && password === '12345') {
      setIsAuthenticated(true);
      return true;
    }

    setIsAuthenticated(false);
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
