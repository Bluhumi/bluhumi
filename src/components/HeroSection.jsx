import React from "react";
import { motion as Motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
    return ( 
        <section className="relative pt-28 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 min-h-[68vh] sm:min-h-[74vh] md:min-h-[80vh] flex items-center">
            <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
            <Motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-[2.15rem] sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.08] md:leading-[1.0] mb-6 sm:mb-8">
                Dem Chaos ein <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 italic font-serif font-light pr-2">Lächeln</span> schenken<span className="text-blue-500">.</span>
                </h1>
                
                <p className="text-base sm:text-xl md:text-2xl text-slate-400 max-w-2xl font-light leading-relaxed mb-8 sm:mb-12">
                In einer Welt der Überlastung schaffe ich Klarheit durch radikale Vereinfachung. 
                Mein Antrieb? <span className="block sm:inline text-white font-medium">To&nbsp;make other people look good.</span>
                </p>

                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 items-start sm:items-center">
                <a href="#exnovation" className="group flex items-center gap-3 bg-blue-600 hover:bg-blue-500 active:bg-blue-500 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold transition-all">
                    Wie ich arbeite
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="text-[10px] sm:text-[12px] uppercase tracking-[0.22em] sm:tracking-[0.3em] text-zinc-500 font-bold border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-6 w-full sm:w-auto">
                    Sovereign Modern Stack <br /> 
                    <span className="text-blue-400/50">powered by Intelligence & Intuition & Heart</span>
                </div>
                </div>
            </Motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
