import React, { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Clapperboard, Compass
} from 'lucide-react';

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-700 ${
            scrolled 
            ? 'py-3 sm:py-4' 
            : 'py-5 sm:py-8'
        }`}>
            <div className="max-w-6xl mx-auto px-3 sm:px-6">
                {/* Die "Glaskapsel" */}
                <div className={`flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 rounded-full transition-all duration-700 border ${
                    scrolled 
                    ? 'bg-black/60 backdrop-blur-md border-white/10 shadow-2xl shadow-blue-500/5' 
                    : 'bg-transparent border-transparent'
                }`}>
            
                    {/* Logo Section */}
                    <div className="flex flex-col group cursor-default min-w-0">
                        <span className="text-2xl sm:text-3xl font-black tracking-tighter text-white transition-colors duration-500 group-hover:text-blue-500 lowercase leading-none">
                            bluhumi<span className="text-blue-500 group-hover:text-white">.</span>
                        </span>

                        <div className="flex sm:hidden items-center gap-1 mt-1 text-[7px] uppercase tracking-[0.14em] text-zinc-400/80 font-bold leading-none">
                            <span>Producer</span>
                            <span className="text-zinc-700">•</span>
                            <span>Architect</span>
                            <span className="text-zinc-700">•</span>
                            <span className="text-blue-400/70">Exnovator®</span>
                        </div>
                        
                        <div className="hidden sm:flex items-center gap-1.5 mt-1 opacity-40 group-hover:opacity-100 transition-all duration-700">
                            <span className="text-[8px] uppercase tracking-[0.22em] text-zinc-400 font-bold">Producer</span>
                            <Clapperboard size={8} className="text-zinc-600" />
                            <span className="w-[1px] h-2 bg-white/10" />
                            <span className="text-[8px] uppercase tracking-[0.22em] text-zinc-400 font-bold">Architect</span>
                            <Compass size={8} className="text-zinc-600" />
                            <span className="w-[1px] h-2 bg-white/10" />
                            <span className="text-[8px] uppercase tracking-[0.22em] text-blue-400/70 font-black">Exnovator®</span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.4em] font-bold items-center">
                        <a
                            href="#exnovation"
                            className="text-zinc-400 hover:text-white active:text-white transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70"
                        >
                            Architektur
                        </a>
                        <a
                            href="#vision"
                            className="text-zinc-400 hover:text-white active:text-white transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70"
                        >
                            Vision
                        </a>
                        <a
                            href="#kontakt"
                            className="px-5 py-2 bg-white text-black rounded-full hover:bg-blue-500 hover:text-white active:bg-blue-500 active:text-white transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                        >
                            Dialog
                        </a>
                    </div>

                    {/* Mobile Button */}
                    <button 
                        className="md:hidden text-white rounded-full p-2.5 hover:bg-white/10 active:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 shrink-0 ml-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
                        aria-expanded={mobileMenuOpen}
                        aria-controls="mobile-navigation"
                    >
                        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Glass Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <Motion.div 
                        id="mobile-navigation"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-24 left-6 right-6 md:hidden bg-zinc-900/90 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <div className="flex flex-col p-8 gap-6 text-sm uppercase tracking-[0.3em] font-bold">
                            <a href="#exnovation" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-white active:text-white transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70">Architektur</a>
                            <a href="#vision" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-white active:text-white transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70">Vision</a>
                            <a href="#kontakt" onClick={() => setMobileMenuOpen(false)} className="text-blue-400 hover:text-blue-300 active:text-blue-300 transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70">Dialog</a>
                        </div>
                    </Motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default NavBar;
