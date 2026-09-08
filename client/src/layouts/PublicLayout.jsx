import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { WhatsAppFloating } from '../components/common/WhatsAppFloating';
import { useAnalytics } from '../hooks/useAnalytics';

export const PublicLayout = () => {
  useAnalytics();

  return (
    <div className="min-h-screen flex flex-col bg-cream text-charcoal antialiased">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
};
