import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
    return ( 
        <section className="relative pt-40 pb-20 min-h-[80vh] flex items-center">
            <div className="max-w-6xl mx-auto px-8 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-[1.0] mb-8">
                Dem Chaos ein <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 italic font-serif font-light pr-2">Lächeln</span> schenken<span className="text-blue-500">.</span>
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
                    <span className="text-blue-400/50">powered by Intelligence & Intuition & Heart</span>
                </div>
                </div>
            </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;