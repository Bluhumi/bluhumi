import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, ArrowRight, Github, Linkedin, Waypoints, 
  Heart, Smile, ShieldCheck, Zap, Layout
} from 'lucide-react';

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/5 blur-[120px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
        <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter text-white">BLUHUMI<span className="text-blue-500">.</span></span>
            <span className="text-[8px] uppercase tracking-[0.4em] text-zinc-600 font-bold -mt-1 ml-1">Dr.-Ing. // Stratege // Mensch</span>
          </div>
          <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.3em] font-bold items-center">
            <a href="#rollen" className="hover:text-blue-400 transition-colors">Struktur</a>
            <a href="#vision" className="hover:text-blue-400 transition-colors">Vision</a>
            <a href="#kontakt" className="px-5 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">Dialog</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-5xl mx-auto px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
              <Zap size={12} /> Dem Chaos ein Lächeln schenken
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
              Executive Producer<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-500">& Architect.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed italic">
              „Ich gestalte Strukturen, die Komplexität exnovieren und Menschen glänzen lassen.“
            </p>

            {/* Bullshit Filter Integration */}
            <div className="flex flex-wrap justify-center gap-3 mt-12 opacity-80">
              <BullshitFilter bad="BÜROKRATIE" good="EFFIZIENZ" />
              <BullshitFilter bad="MASKEN" good="AUTHENTIZITÄT" />
              <BullshitFilter bad="CHAOS" good="STRUKTUR" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roles Grid */}
      <section id="rollen" className="py-32 bg-[#080808] border-y border-white/5 relative z-10">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Waypoints, title: "Architekt", desc: "Systemische Klarheit für komplexe Herausforderungen." },
              { icon: ShieldCheck, title: "Robin Hood", desc: "Digitale Souveränität und Werte schützen." },
              { icon: Smile, title: "Partner", desc: "Empathische Begleitung auf Augenhöhe." },
              { icon: Layout, title: "Producer", desc: "Vom Konzept bis zur exzellenten Umsetzung." }
            ].map((role, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all">
                <role.icon className="text-blue-500 mb-6" size={32} />
                <h3 className="text-white font-bold text-lg mb-2">{role.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{role.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="vision" className="py-40 relative">
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 tracking-tight">
              „Make other people look good.“
            </h2>
            <div className="w-24 h-px bg-blue-600 mx-auto mb-12" />
            <p className="text-2xl text-slate-400 font-serif italic max-w-2xl mx-auto">
              Vielleicht ist der Sinn des Lebens ja herauszufinden, ab wann aus traurig glücklich wird. Vielleicht sogar zu erleben.
            </p>
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
          <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 text-center">
            &copy; 2026 Dr.-Ing. Markus Blumenthal // Stratege // Mensch // Engineered in Europe
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;