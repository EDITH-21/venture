import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { WhatsAppFloating } from '../components/common/WhatsAppFloating';
import { ProjectModal } from '../components/common/ProjectModal';
import { useAnalytics } from '../hooks/useAnalytics';

export const PublicLayout = () => {
  useAnalytics();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-sky-500 selection:text-white">
      <Navbar onOpenProjectModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">
        <Outlet context={{ onOpenProjectModal: () => setIsModalOpen(true) }} />
      </main>
      <Footer />
      <WhatsAppFloating />
      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
