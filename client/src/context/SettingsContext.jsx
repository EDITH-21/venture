import React, { createContext, useContext, useState, useEffect } from 'react';
import { settingsAPI } from '../services/api';

const SettingsContext = createContext(null);

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    companyName: 'Vanguard Digital',
    tagline: "Technology, creativity and digital solutions for what's next.",
    email: 'shivamgate21@gmail.com',
    phone: '+91 99981 60726',
    whatsapp: '9998160726',
    instagram: 'https://instagram.com/vanguard.digital',
    website: 'https://vanguard-digital.tech',
  });
  const [loading, setLoading] = useState(true);

  const fetchSettings = async () => {
    try {
      const res = await settingsAPI.get();
      if (res.data?.success && res.data?.data) {
        setSettings(res.data.data);
      }
    } catch (err) {
      console.warn('Using default site settings:', err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const updateSettingsState = (newSettings) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  return (
    <SettingsContext.Provider value={{ settings, loading, fetchSettings, updateSettingsState }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};
