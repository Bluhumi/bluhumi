// src/components/ArchitectureSection.jsx
import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { Cpu, ShieldCheck, Heart } from 'lucide-react';

const architectureData = [
  {
    id: '01',
    title: 'Kompetenz',
    question: 'Funktioniert es?',
    description: 'Wir wandeln blinde Effizienz in integrale Effektivität. Erfolg ist nur dann Erfolg, wenn er das Ganze stärkt.',
    icon: Cpu,
    bgColor: 'bg-blue-500/5',
    borderColor: 'border-blue-500/10',
    textColor: 'text-blue-400', // Klares Blau
    image: {
      fallback: '/assets/images/optimized/Markus_Profilbild-960w.jpg',
      jpeg: '/assets/images/optimized/Markus_Profilbild-480w.jpg 480w, /assets/images/optimized/Markus_Profilbild-960w.jpg 960w',
      avif: '/assets/images/optimized/Markus_Profilbild-480w.avif 480w, /assets/images/optimized/Markus_Profilbild-960w.avif 960w',
      webp: '/assets/images/optimized/Markus_Profilbild-480w.webp 480w, /assets/images/optimized/Markus_Profilbild-960w.webp 960w',
      width: 2418,
      height: 2351,
    },
  },
  {
    id: '02',
    title: 'Integrität',
    question: 'Ist es richtig?',
    description: 'Wir prüfen die Richtung. Nur weil ein Weg gangbar ist, ist er noch lange nicht richtig. Als Exnovator® helfe ich Ihnen, das Unwesentliche wegzuschneiden.',
    icon: ShieldCheck,
    bgColor: 'bg-indigo-500/5', // Ein Hauch Indigo als Brücke
    borderColor: 'border-indigo-500/10',
    textColor: 'text-indigo-400', // Weicherer Übergang
    isTrademark: true,
    image: {
      fallback: '/assets/images/optimized/Markus_FrankSchneider_18-960w.jpg',
      jpeg: '/assets/images/optimized/Markus_FrankSchneider_18-480w.jpg 480w, /assets/images/optimized/Markus_FrankSchneider_18-960w.jpg 960w',
      avif: '/assets/images/optimized/Markus_FrankSchneider_18-480w.avif 480w, /assets/images/optimized/Markus_FrankSchneider_18-960w.avif 960w',
      webp: '/assets/images/optimized/Markus_FrankSchneider_18-480w.webp 480w, /assets/images/optimized/Markus_FrankSchneider_18-960w.webp 960w',
      width: 4000,
      height: 6000,
    },
  },
  {
    id: '03',
    title: 'Resonanz',
    question: 'Lebt es?',
    description: 'Wir suchen die Lebendigkeit. Echte Co-Creation entsteht nur dort, wo Menschen in ihrer Autonomie und Freude wirken können.',
    icon: Heart,
    bgColor: 'bg-gradient-to-br from-blue-500/10 to-purple-500/10', // Der finale "Flow"
    borderColor: 'border-purple-500/20',
    textColor: 'text-blue-300',
    image: {
      fallback: '/assets/images/optimized/Markus_FrankSchneider_04-960w.jpg',
      jpeg: '/assets/images/optimized/Markus_FrankSchneider_04-480w.jpg 480w, /assets/images/optimized/Markus_FrankSchneider_04-960w.jpg 960w',
      avif: '/assets/images/optimized/Markus_FrankSchneider_04-480w.avif 480w, /assets/images/optimized/Markus_FrankSchneider_04-960w.avif 960w',
      webp: '/assets/images/optimized/Markus_FrankSchneider_04-480w.webp 480w, /assets/images/optimized/Markus_FrankSchneider_04-960w.webp 960w',
      width: 4000,
      height: 6000,
    },
  },
];

const ArchitectureSection = () => {
  const [activeTouchCard, setActiveTouchCard] = useState(null);

  const handleCardPointerDown = (event, cardId) => {
    if (event.pointerType !== 'touch' && event.pointerType !== 'pen') return;
    setActiveTouchCard((prev) => (prev === cardId ? null : cardId));
  };

  return (
    <section id="exnovation" className="py-14 sm:py-20 md:py-24 bg-[#050505] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <Motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          className="mb-10 sm:mb-14 md:mb-16"
        >
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.24em] sm:tracking-[0.3em] uppercase text-blue-500 mb-3 sm:mb-4 block">Navigation durch den Umbruch</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-5 sm:mb-6 tracking-tight">
            Drei Ebenen der Souveränität.
          </h2>
        </Motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {architectureData.map((item, i) => {
            const isTouchActive = activeTouchCard === item.id;

            return (
            <Motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileTap={{ scale: 0.99 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onPointerDown={(event) => handleCardPointerDown(event, item.id)}
              className={`rounded-3xl border p-6 sm:p-8 flex flex-col h-full relative overflow-hidden group transition-all duration-700 ${item.borderColor} ${item.bgColor} hover:border-blue-500/30 active:border-blue-500/30 ${isTouchActive ? 'border-blue-500/30' : ''}`}
            >
              {/* Der Glow-Effekt, den du magst */}
              <div className={`absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ${isTouchActive ? 'opacity-100' : ''}`} />
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className={`p-2.5 rounded-xl bg-white/5 border border-white/5 ${item.textColor}`}>
                  <item.icon size={20} />
                </div>
                <span className="text-2xl font-black text-white/5 font-mono">{item.id}</span>
              </div>

              <div className="mb-8 relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {item.title}{item.isTrademark && <sup className="text-[9px] opacity-40">®</sup>}
                </h3>
                <p className={`font-serif italic text-lg sm:text-xl mb-3 sm:mb-4 ${item.textColor}`}>{item.question}</p>
                <p className="text-slate-400 text-base sm:text-[17px] leading-relaxed min-h-0 sm:min-h-[60px]">{item.description}</p>
              </div>

              {/* Fix für die Bild-Skalierung */}
              <div className="mt-auto pt-6">
                <div className="rounded-2xl overflow-hidden border border-white/10 h-72 sm:h-80 md:h-64 relative">
                  <picture>
                    <source
                      type="image/avif"
                      srcSet={item.image.avif}
                      sizes="(min-width: 1024px) 30vw, (min-width: 768px) 33vw, 100vw"
                    />
                    <source
                      type="image/webp"
                      srcSet={item.image.webp}
                      sizes="(min-width: 1024px) 30vw, (min-width: 768px) 33vw, 100vw"
                    />
                    <img
                      src={item.image.fallback}
                      srcSet={item.image.jpeg}
                      sizes="(min-width: 1024px) 30vw, (min-width: 768px) 33vw, 100vw"
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                      width={item.image.width}
                      height={item.image.height}
                      className={`w-full h-full object-cover object-top transition-all duration-700 scale-105 group-hover:scale-100 grayscale group-hover:grayscale-0 group-active:scale-100 ${isTouchActive ? '!scale-100 !grayscale-0' : ''}`}
                    />
                  </picture>
                  {/* Subtiler Overlay für bessere Integration */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 md:group-hover:opacity-30 transition-opacity duration-700 pointer-events-none ${isTouchActive ? '!opacity-30' : ''}`} />
                </div>
              </div>
            </Motion.div>
          )})}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
