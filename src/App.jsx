import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, ArrowRight, Github, Linkedin, Waypoints, Menu, X,
  Heart, Smile, ShieldCheck, Zap, Layout, Clapperboard, Compass, Scissors
} from 'lucide-react';

import ExnovationSection from './components/ExnovationSection'; // Importiere die neue Komponente
import PhilosophySection from './components/PhilosophySection';

// Interaktive Komponente für den "Bullshit-Filter"
const BullshitFilter = ({ bad, good }) => {
  const [isExnovated, setIsExnovated] = useState(false);
  return (
    <motion.button
      onClick={() => setIsExnovated(!isExnovated)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-6 py-3 rounded-2xl border font-mono text-xs tracking-widest transition-all duration-700 ${
        isExnovated 
        ? "border-blue-500/50 bg-blue-500/10 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.2)]" 
        : "border-zinc-800 bg-zinc-900/50 text-zinc-500 hover:border-zinc-700"
      }`}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={isExnovated}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          {isExnovated ? good : bad}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
};

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
        <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
          
          {/* Logo: Jetzt lowercase */}
          <div className="flex flex-col group cursor-default">
            <span className="text-3xl font-black tracking-tighter text-white transition-colors duration-500 group-hover:text-blue-500 lowercase">
              bluhumi<span className="text-blue-500 group-hover:text-white">.</span>
            </span>
            
            {/* Die Titel - Jetzt permanent im Header */}
            {/* Subline mit Rollen – Jetzt permanent sichtbar, aber dezent */}
            <div className="flex items-center gap-2 mt-1.5 opacity-40 group-hover:opacity-100 transition-all duration-700">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-bold whitespace-nowrap">
                  Executive Producer
                </span>
                <Clapperboard size={10} className="text-zinc-600 group-hover:text-blue-500 transition-colors" />
              </div>

              <span className="w-[1px] h-2 bg-white/10" />

              <div className="flex items-center gap-1.5">
                <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-bold whitespace-nowrap">
                  Architect
                </span>
                <Compass size={10} className="text-zinc-600 group-hover:text-blue-500 transition-colors" />
              </div>

              <span className="w-[1px] h-2 bg-white/10" />

              <div className="flex items-center gap-1.5">
                <span className="text-[10px] uppercase tracking-[0.3em] text-blue-400/70 group-hover:text-blue-400 font-black whitespace-nowrap">
                  Exnovator®
                </span>
                <Scissors size={10} className="text-blue-500/30 group-hover:rotate-12 transition-transform" />
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.3em] font-bold items-center">
            <a href="#exnovation" className="hover:text-blue-400 transition-colors">Architektur</a>
            <a href="#vision" className="hover:text-blue-400 transition-colors">Vision</a>
            <a href="#kontakt" className="px-5 py-2 border border-blue-500/20 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-500">Dialog</a>
          </div>

          {/* Hamburger Button für Mobile */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Overlay Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-zinc-900 border-b border-white/10 overflow-hidden"
            >
              <div className="flex flex-col p-8 gap-6 text-sm uppercase tracking-widest font-bold">
                <a href="#exnovation" onClick={() => setMobileMenuOpen(false)}>Architektur</a>
                <a href="#vision" onClick={() => setMobileMenuOpen(false)}>Vision</a>
                <a href="#kontakt" onClick={() => setMobileMenuOpen(false)}>Dialog</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 min-h-[80vh] flex items-center">
        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-[1.0] mb-8">
              Dem Chaos ein <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 italic font-serif font-light">Lächeln</span> schenken<span className="text-blue-500">.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl font-light leading-relaxed mb-12">
              In einer Welt der Überlastung schaffe ich Klarheit durch radikale Vereinfachung. 
              Mein Antrieb? <span className="text-white font-medium">To make other people look good.</span>
            </p>

            <div className="flex flex-wrap gap-6 items-center">
              <a href="#exnovation" className="group flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold transition-all">
                Wie ich arbeite
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="text-[12px] uppercase tracking-[0.3em] text-zinc-500 font-bold border-l border-white/10 pl-6">
                Sovereign Modern Stack <br /> 
                <span className="text-blue-400/50">powered by Intelligence & Intuition</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ExnovationSection />
      
      <PhilosophySection />

      {/* Dialog / Kontakt Section */}
      <section id="kontakt" className="py-32 bg-zinc-900/30 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Lust auf einen echten Dialog?</h2>
            <p className="text-xl text-slate-400 mb-12 font-light">
              Keine automatisierten Funnel, kein Bullshit. Einfach ein Gespräch über <br className="hidden md:block" /> 
              Struktur, Souveränität und wie wir andere zum Glänzen bringen.
            </p>
            
            <a 
              href="mailto:markus@bluhumi.de" 
              className="inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all duration-500 group"
            >
              Schreiben Sie mir
              <Mail size={20} className="group-hover:translate-y-[-2px] transition-transform" />
            </a>
            
            <div className="mt-16 flex justify-center gap-8 text-zinc-500 text-[10px] uppercase tracking-[0.4em]">
              <span className="hover:text-white transition-colors cursor-default">Integrität</span>
              <span className="text-zinc-800">•</span>
              <span className="hover:text-white transition-colors cursor-default">Resonanz</span>
              <span className="text-zinc-800">•</span>
              <span className="hover:text-white transition-colors cursor-default">Exnovation</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontakt" className="py-20 border-t border-white/5 relative z-10">
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Bluhumi // Architektur & Vision</h2>
            <p className="text-slate-500">Lass uns gemeinsam Chaos in Klarheit verwandeln.</p>
          </div>
          <div className="flex gap-4">
            {[Linkedin, Github, Mail].map((Icon, i) => (
              <a key={i} href="#" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500">
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-8 mt-20">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-8" />
          <p className="text-xs uppercase tracking-[0.5em] text-zinc-400 text-center">
            &copy; 2026 Dr.-Ing. Markus Blumenthal // Stratege // Mensch | Engineered in Europe
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;