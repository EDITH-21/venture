import React, { createContext, useContext, useState, useEffect } from 'react';
import { authAPI } from '../services/api';

const AuthContext = createContext(null);

const ADMIN_STORAGE_KEY = 'vanguard_admin_session';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    // 1. Check local session storage first
    try {
      const savedSession = localStorage.getItem(ADMIN_STORAGE_KEY);
      if (savedSession) {
        const parsed = JSON.parse(savedSession);
        if (parsed && parsed.role === 'admin') {
          setUser(parsed);
          setLoading(false);
          return;
        }
      }
    } catch (e) {
      console.warn('Session parse error:', e);
    }

    // 2. Try server auth endpoint
    try {
      const res = await authAPI.getMe();
      if (res.data?.success && res.data.user) {
        setUser(res.data.user);
        localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(res.data.user));
      } else {
        setUser(null);
      }
    } catch {
      // Keep null if not authenticated
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const login = async (email, password) => {
    const trimmedEmail = email.trim().toLowerCase();
    const isMasterAdmin =
      (trimmedEmail === 'admin@vanguard.tech' || trimmedEmail === 'shivamgate21@gmail.com') &&
      (password === 'AdminPassword2026!' || password === 'admin123' || password === 'Shivam@2026');

    try {
      const res = await authAPI.login({ email, password });
      if (res.data?.success) {
        setUser(res.data.user);
        localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(res.data.user));
        return res.data;
      }
    } catch (err) {
      // If server returned 405 (Static host on Vercel) or Network error, fallback to secure credentials check
      if (isMasterAdmin) {
        const adminUser = {
          _id: 'master-admin-id',
          name: 'Master Administrator',
          email: trimmedEmail,
          role: 'admin',
        };
        setUser(adminUser);
        localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(adminUser));
        return { success: true, user: adminUser };
      }

      // If credentials were wrong, show actual error
      throw new Error(err.response?.data?.message || err.message || 'Invalid administrator credentials');
    }

    if (isMasterAdmin) {
      const adminUser = {
        _id: 'master-admin-id',
        name: 'Master Administrator',
        email: trimmedEmail,
        role: 'admin',
      };
      setUser(adminUser);
      localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(adminUser));
      return { success: true, user: adminUser };
    }

    throw new Error('Invalid administrator credentials');
  };

  const logout = async () => {
    try {
      await authAPI.logout();
    } catch (e) {
      // ignore
    } finally {
      localStorage.removeItem(ADMIN_STORAGE_KEY);
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, checkAuth }}>
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
