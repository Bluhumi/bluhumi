import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, ShieldCheck, Heart, ArrowRight } from 'lucide-react';

// --- Ändere das Pulsieren auf "Sichtbar" ---
const BackgroundResonance = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div 
      animate={{ 
        scale: [1, 1.3, 1],      // Deutlicheres Pulsieren
        opacity: [0.2, 0.7, 0.2]  // Stärkeres Leuchten
      }}
      transition={{ 
        duration: 8,             
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/20 rounded-full blur-[100px]"
    />
  </div>
);

export default function App() {
  const [isBreathing, setIsBreathing] = useState(true);

  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-sky-500/30 overflow-hidden">
      <BackgroundResonance />

      {/* Navigation: Effizienz & Klarheit */}
      <nav className="relative z-50 flex justify-between items-center p-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tighter lowercase"
        >
          bluhumi<span className="text-sky-500">.</span>
        </motion.div>
        <div className="flex gap-8 text-xs font-mono uppercase tracking-widest text-zinc-500">
          <button className="hover:text-zinc-100 transition-colors">Architektur</button>
          <button className="hover:text-zinc-100 transition-colors">Exnovation</button>
          <button className="hover:text-zinc-100 transition-colors">Resonanz</button>
        </div>
      </nav>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
        
        {/* Die Hero-Sektion: Das Wunder spüren */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl"
        >
          <h2 className="text-zinc-500 font-mono text-sm mb-6 tracking-[0.3em] uppercase">
            Dr.-Ing. // Strategie // Mensch
          </h2>
          
          <h1 className="text-5xl md:text-8xl font-light tracking-tighter leading-tight mb-8">
            dem chaos ein <br />
            <span className="italic font-serif text-sky-400">lächeln</span> schenken.
          </h1>

          <p className="max-w-xl mx-auto text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
            Ich schneide den <span className="text-zinc-100 underline decoration-zinc-700 underline-offset-4">Bullshit</span> weg, 
            um Raum für das Wesentliche zu schaffen. Funktionale Ästhetik für Menschen, die das Wunder wieder spüren wollen.
          </p>
        </motion.div>

        {/* Call to Action: Der Einladung folgen */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.98 }}
            className="group relative flex items-center gap-4 px-8 py-4 bg-zinc-100 text-zinc-950 rounded-full font-medium transition-all hover:pr-12 active:scale-95 shadow-lg shadow-sky-500/5 hover:shadow-sky-500/20"
          >
            Lass uns das Wahre erschaffen
            <ArrowRight className="absolute right-4 opacity-0 group-hover:opacity-100 transition-all" size={20} />
          </motion.button>
        </motion.div>
      </main>

      {/* Footer / Status: Chirurgische Präzision */}
      <footer className="absolute bottom-8 left-0 right-0 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            System Status: Resonanz aktiv
          </div>
          <div>© 2026 // Architect of Possibilities</div>
          <div className="flex gap-4">
            <span>Jobs-Spirit</span>
            <span>Robin Hood Method</span>
          </div>
        </div>
      </footer>
    </div>
  );
}