import React, { useEffect, useRef, useState } from 'react';
import { motion as Motion } from 'framer-motion';

const PhilosophySection = () => {
  const topLineRef = useRef(null);
  const bottomLineRef = useRef(null);
  const [headlineScale, setHeadlineScale] = useState({ top: 1, bottom: 1 });

  useEffect(() => {
    const measureHeadline = () => {
      const topLine = topLineRef.current;
      const bottomLine = bottomLineRef.current;
      if (!topLine || !bottomLine) return;

      const topWidth = topLine.getBoundingClientRect().width;
      const bottomWidth = bottomLine.getBoundingClientRect().width;
      if (!topWidth || !bottomWidth) return;

      const maxWidth = Math.max(topWidth, bottomWidth);
      const topScale = Math.min(maxWidth / topWidth, 1.08);
      const bottomScale = Math.min(maxWidth / bottomWidth, 1.08);

      setHeadlineScale({
        top: Number.isFinite(topScale) ? topScale : 1,
        bottom: Number.isFinite(bottomScale) ? bottomScale : 1,
      });
    };

    const rafId = requestAnimationFrame(measureHeadline);
    window.addEventListener('resize', measureHeadline);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', measureHeadline);
    };
  }, []);

  return (
    <section id="vision" className="py-16 sm:py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Subtiles Hintergrund-Element für die "holografische" Tiefe */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8 sm:space-y-12"
        >
          {/* Label */}
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-8 bg-blue-500/50" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.28em] sm:tracking-[0.4em] text-blue-400 font-bold">
              Manifest der Wirksamkeit
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-[clamp(1.4rem,5.6vw,2rem)] sm:text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            <span
              ref={topLineRef}
              className="block whitespace-nowrap w-fit mx-auto origin-center"
              style={{ transform: `scaleX(${headlineScale.top})` }}
            >
              Architektur für das Leben<span className="text-blue-500">.</span>
            </span>
            <span
              ref={bottomLineRef}
              className="block whitespace-nowrap w-fit mx-auto origin-center text-zinc-500"
              style={{ transform: `scaleX(${headlineScale.bottom})` }}
            >
              Vom Verwalten zum Wirken.
            </span>
          </h2>

          {/* Content Body */}
          <div className="space-y-6 sm:space-y-8 text-base sm:text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
            <p>
              Wir leben in einer Zeit der künstlichen Fülle und der strukturellen Leere. Während Algorithmen uns mit statistischem Rauschen fluten, ersticken wir in linearen Prozessen, die für eine Welt von gestern gebaut wurden. Die Folge ist Entfremdung: Wir funktionieren, aber wir wirken nicht mehr.
            </p>

            <p className="text-white font-medium italic font-serif border-l-2 border-blue-500/30 pl-6 py-2">
              Ich glaube nicht an Optimierung. Ich glaube an Befreiung.
            </p>

            <p>
              Als Ingenieur und zertifizierter <span className="text-white font-normal text-blue-100/80">Social Architect</span> verbinde ich die Präzision technischer Systeme mit der Tiefe integraler Dynamiken. Souveränität ist kein Zustand, den man verwaltet, sondern eine Fähigkeit, die wir gemeinsam freilegen.
            </p>

            <p>
              Echte <span className="text-blue-400">Antifragilität</span> entsteht dort, wo Technik und Mensch in Resonanz gehen. Wenn wir den Ballast des Unwesentlichen abwerfen (<span className="italic">Exnovation</span>), schaffen wir keinen leeren Raum, sondern ein lebendiges Meshwork. Einen Raum, in dem Komplexität nicht mehr bedrohlich wirkt, sondern als Spielfeld für Wirksamkeit dient.
            </p>
          </div>

          {/* Signature / Core Mission */}
          <div className="pt-6 sm:pt-8 border-t border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="text-blue-400 font-bold tracking-widest uppercase text-[10px] mb-2">Die Mission</p>
              <p className="text-2xl font-black text-white lowercase">to make other people look good<span className="text-blue-500">.</span></p>
            </div>
            
            <div className="flex flex-wrap gap-4 text-[9px] uppercase tracking-[0.2em] text-zinc-600 font-bold">
              <span className="px-3 py-1 border border-white/5 rounded-full">Integral Theory</span>
              <span className="px-3 py-1 border border-white/5 rounded-full">Spiral Dynamics</span>
              <span className="px-3 py-1 border border-white/5 rounded-full">Theory U</span>
              <span className="px-3 py-1 border border-white/5 rounded-full">Agile Mastery</span>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;
