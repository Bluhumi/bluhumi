import React from 'react';
import { Mail } from 'lucide-react';
import { LinkedInIcon } from './Icons'; // Pfad beachten

const Footer = ({ onOpenImpressum, onOpenDatenschutz}) => { // Prop entgegennehmen
  return (
    <footer id="footer" className="py-16 sm:py-20 md:py-24 border-t border-white/5 relative z-10 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-10 sm:gap-12 text-center md:text-left">
          
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
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:bg-white hover:text-black hover:border-white active:bg-white active:text-black active:border-white transition-all duration-500 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-label="LinkedIn-Profil öffnen"
            >
              <LinkedInIcon className="w-6 h-6 transition-transform group-hover:scale-110 group-active:scale-110" /> 
            </a>

            {/* Mail Button */}
            <a 
              href="mailto:markus@bluhumi.de" 
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:bg-white hover:text-black hover:border-white active:bg-white active:text-black active:border-white transition-all duration-500 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-label="E-Mail schreiben"
            >
              <Mail size={24} className="transition-transform group-hover:scale-110 group-active:scale-110" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-6xl mx-auto px-5 sm:px-8 mt-14 sm:mt-20 md:mt-24 pb-8 sm:pb-12">
          {/* Sanfter oberer Abschluss */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-12" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-[9px] uppercase tracking-[0.3em] font-bold text-zinc-500">
            
            {/* Block 1: Signature */}
            <div className="flex items-center gap-3">
              <span className="text-white tracking-tighter text-sm lowercase">bluhumi<span className="text-blue-500">.</span></span>
              <span className="text-zinc-800">|</span>
              <p className="whitespace-nowrap">© 2026 Dr.-Ing. Markus Blumenthal</p>
            </div>

            {/* Block 2: Quality Anchor */}
            <div className="flex flex-col items-center gap-1 opacity-60">
              <span className="text-blue-500/60 tracking-[0.4em]">Engineered in Germany|Europe</span>
              <span className="text-[7px] text-zinc-700 tracking-[0.6em]">Stratege // Mensch</span>
            </div>

            {/* Block 3: Legal Links */}
            <div className="flex items-center gap-8">
              <button 
                type="button"
                onClick={(e) => { e.preventDefault(); onOpenImpressum(); }}
                className="hover:text-white active:text-white transition-colors rounded border border-transparent px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Impressum
              </button>
              <button 
                type="button"
                onClick={(e) => { e.preventDefault(); onOpenDatenschutz(); }}
                className="hover:text-white active:text-white transition-colors rounded border border-transparent px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Datenschutz
              </button>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
