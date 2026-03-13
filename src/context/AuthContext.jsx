import { createContext, useContext, useState, useCallback } from 'react';
import axiosBaseInstance from '../services/api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  });

  const [token, setToken] = useState(() => localStorage.getItem('token'));

  const login = useCallback(async (username, password) => {
    const { data } = await axiosBaseInstance.post('/admin/login', {
      username,
      password,
    });

    if (data.login?.accessToken) {
      localStorage.setItem('token', data.login.accessToken);
      localStorage.setItem('user', JSON.stringify(data.login.adminProfile));
      setToken(data.login.accessToken);
      setUser(data.login.adminProfile);
      return data;
    }
    throw new Error('Invalid username or password');
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
  }, []);

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider
      value={{ user, token, login, logout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export default AuthContext;
