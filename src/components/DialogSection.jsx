import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const DialogSection = () => {
return (
    <section id="kontakt" className="py-16 sm:py-24 md:py-32 bg-zinc-900/30 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center relative z-10">
            <Motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
            >
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-5 sm:mb-6">Lust auf einen echten Dialog?</h2>
                <p className="text-base sm:text-xl text-slate-400 mb-10 sm:mb-12 font-light">
                Keine automatisierten Funnel, kein Bullshit. Einfach ein Gespräch über <br className="hidden md:block" /> 
                Struktur, Souveränität und wie wir andere zum Glänzen bringen.
                </p>
                
                <a 
                href="mailto:markus@bluhumi.de" 
                className="inline-flex items-center gap-4 bg-white text-black px-7 sm:px-10 py-4 sm:py-5 rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all duration-500 group"
                >
                Schreiben Sie mir
                <Mail size={20} className="group-hover:translate-y-[-2px] transition-transform" />
                </a>
                
                <div className="mt-10 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 px-4 text-zinc-500 text-[10px] uppercase tracking-[0.22em] sm:tracking-[0.4em]">
                <span className="hover:text-white transition-colors cursor-default">Integrität</span>
                <span className="hidden sm:inline text-zinc-800">•</span>
                <span className="hover:text-white transition-colors cursor-default">Resonanz</span>
                <span className="hidden sm:inline text-zinc-800">•</span>
                <span className="hover:text-white transition-colors cursor-default">Exnovation</span>
                </div>
            </Motion.div>
        </div>
    </section>
    );
};

export default DialogSection;
