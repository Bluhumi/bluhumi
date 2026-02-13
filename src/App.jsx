import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import ArchitectureSection from './components/ArchitectureSection';
import PhilosophySection from './components/PhilosophySection';
import DialogSection from './components/DialogSection';
import Footer from './components/Footer';

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
 

  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-blue-500/30 overflow-x-hidden">   

      <NavBar />
      
      <HeroSection />

      <ArchitectureSection />
      
      <PhilosophySection />

      <DialogSection />      

      <Footer />

    </div>
  );
};

export default App;