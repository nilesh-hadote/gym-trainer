import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';
import { getCurrentUserFromStorage, setCurrentUserToStorage, setToken, removeToken } from '../services/api';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isClient: boolean;
  loginUser: (user: User, token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => getCurrentUserFromStorage());

  useEffect(() => {
    const stored = getCurrentUserFromStorage();
    if (stored) setUser(stored);
  }, []);

  const loginUser = (user: User, token: string) => {
    setUser(user);
    setToken(token);
    setCurrentUserToStorage(user);
  };

  const logout = () => {
    setUser(null);
    removeToken();
    setCurrentUserToStorage(null);
  };

  const isAuthenticated = !!user;
  const isAdmin = user?.role === 'ADMIN' || user?.role === 'COACH';
  const isClient = user?.role === 'CLIENT';

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, isAdmin, isClient, loginUser, logout }}>
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
