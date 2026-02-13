import React from 'react';
import { Mail } from 'lucide-react';
import { LinkedInIcon } from './Icons'; // Pfad beachten

const Footer = () => {
  return (
    <footer id="footer" className="py-24 border-t border-white/5 relative z-10 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          
          {/* Brand Section */}
          <div>
            <h2 className="text-3xl font-black text-white mb-2 lowercase tracking-tighter">
              bluhumi<span className="text-blue-500">.</span>
            </h2>
            <p className="text-slate-500 text-sm font-light">
              Architektur & Vision. Chaos in Klarheit verwandeln.
            </p>
          </div>

          {/* Social & Contact Buttons */}
          <div className="flex items-center gap-6">
            {/* LinkedIn Button */}
            <a 
              href="https://www.linkedin.com/in/markusblumenthal/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:bg-white hover:text-black hover:border-white transition-all duration-500 group"
            >
              <LinkedInIcon className="w-6 h-6 transition-transform group-hover:scale-110" /> 
            </a>

            {/* Mail Button */}
            <a 
              href="mailto:markus@bluhumi.de" 
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:bg-white hover:text-black hover:border-white transition-all duration-500 group"
            >
              <Mail size={24} className="transition-transform group-hover:scale-110" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-6xl mx-auto px-8 mt-20">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-8" />
          <div className="flex flex-col items-center gap-4">
            <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 font-bold text-center">
              &copy; 2026 Dr.-Ing. Markus Blumenthal // Stratege // Mensch
            </p>
            <span className="text-[9px] uppercase tracking-[0.3em] text-blue-500/50 font-medium">
              Engineered in Germany|Europe
            </span>
          </div>
        </div>
    </footer>
  );
};

export default Footer;