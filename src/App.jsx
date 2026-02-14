import React, { useCallback, useEffect, useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import ArchitectureSection from './components/ArchitectureSection';
import PhilosophySection from './components/PhilosophySection';
import DialogSection from './components/DialogSection';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';
import Footer from './components/Footer';

const App = () => {
  // State: null | 'impressum' | 'datenschutz'
  const [activeModal, setActiveModal] = useState(null);

  // Hilfsfunktion zum Schließen (Escape-Taste oder Klick)
  const closeModal = useCallback(() => setActiveModal(null), []);

  useEffect(() => {
    if (!activeModal) return;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeModal();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [activeModal, closeModal]);

  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-blue-500/30 overflow-x-hidden">   

      <NavBar />
      
      <HeroSection />

      <ArchitectureSection />
      
      <PhilosophySection />

      <DialogSection />      

      <Footer 
        onOpenImpressum={() => setActiveModal('impressum')} 
        onOpenDatenschutz={() => setActiveModal('datenschutz')} 
      />

      {/* Modal Overlay System */}
      <AnimatePresence>
        {activeModal && (
          <Motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label={activeModal === 'impressum' ? 'Impressum' : 'Datenschutz'}
          >
            {/* Schließen-Button (Fixed oben rechts) */}
            <button 
              onClick={closeModal}
              className="fixed top-8 right-8 text-white/50 hover:text-white p-4 hover:bg-white/10 rounded-full transition-all z-[110]"
              aria-label="Schließen"
            >
              <X size={32} />
            </button>

            {/* Content-Weiche */}
            <div className="relative">
              {activeModal === 'impressum' && <Impressum />}
              {activeModal === 'datenschutz' && <Datenschutz />}
            </div>

            {/* Klick-ausserhalb-Bereich am Ende der Seite für leichteres Schließen */}
            <div 
              className="h-24 w-full cursor-pointer flex items-center justify-center text-zinc-600 hover:text-zinc-400 transition-colors uppercase text-[10px] tracking-widest"
              onClick={closeModal}
            >
              Zurück zur Hauptseite
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
