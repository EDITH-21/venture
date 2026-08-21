import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { WhatsAppFloating } from '../components/common/WhatsAppFloating';
import { useAnalytics } from '../hooks/useAnalytics';

export const PublicLayout = () => {
  // Global telemetry tracker on all public routes
  useAnalytics();

  return (
    <div className="min-h-screen flex flex-col bg-obsidian text-warm-white">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
};
