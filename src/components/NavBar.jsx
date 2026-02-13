import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Clapperboard, Compass, Scissors
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
            ? 'py-4' 
            : 'py-8'
        }`}>
            <div className="max-w-6xl mx-auto px-6">
                {/* Die "Glaskapsel" */}
                <div className={`flex justify-between items-center px-6 py-4 rounded-full transition-all duration-700 border ${
                    scrolled 
                    ? 'bg-black/60 backdrop-blur-md border-white/10 shadow-2xl shadow-blue-500/5' 
                    : 'bg-transparent border-transparent'
                }`}>
            
                    {/* Logo Section */}
                    <div className="flex flex-col group cursor-default">
                        <span className="text-3xl font-black tracking-tighter text-white transition-colors duration-500 group-hover:text-blue-500 lowercase">
                            bluhumi<span className="text-blue-500 group-hover:text-white">.</span>
                        </span>
                        
                        <div className="flex items-center gap-2 mt-1 opacity-40 group-hover:opacity-100 transition-all duration-700">
                            <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-400 font-bold">Producer</span>
                            <Clapperboard size={8} className="text-zinc-600" />
                            <span className="w-[1px] h-2 bg-white/10" />
                            <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-400 font-bold">Architect</span>
                            <Compass size={8} className="text-zinc-600" />
                            <span className="w-[1px] h-2 bg-white/10" />
                            <span className="text-[9px] uppercase tracking-[0.3em] text-blue-400/70 font-black">Exnovator®</span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.4em] font-bold items-center">
                        <a href="#exnovation" className="text-zinc-400 hover:text-white transition-colors">Architektur</a>
                        <a href="#vision" className="text-zinc-400 hover:text-white transition-colors">Vision</a>
                        <a href="#kontakt" className="px-5 py-2 bg-white text-black rounded-full hover:bg-blue-500 hover:text-white transition-all duration-500">
                            Dialog
                        </a>
                    </div>

                    {/* Mobile Button */}
                    <button 
                        className="md:hidden text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Glass Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-24 left-6 right-6 md:hidden bg-zinc-900/90 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <div className="flex flex-col p-8 gap-6 text-sm uppercase tracking-[0.3em] font-bold">
                            <a href="#exnovation" onClick={() => setMobileMenuOpen(false)}>Architektur</a>
                            <a href="#vision" onClick={() => setMobileMenuOpen(false)}>Vision</a>
                            <a href="#kontakt" onClick={() => setMobileMenuOpen(false)} className="text-blue-400">Dialog</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default NavBar;