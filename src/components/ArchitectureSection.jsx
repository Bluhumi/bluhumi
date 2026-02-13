// src/components/ExnovationSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
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
    image: '/assets/images/Markus_Profilbild.jpg',
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
    image: '/assets/images/Markus_FrankSchneider_18.jpg',
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
    image: '/assets/images/Markus_FrankSchneider_04.jpg',
  },
];

const ExnovationSection = () => {
  return (
    <section id="exnovation" className="py-24 bg-[#050505] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-bold tracking-[0.3em] uppercase text-blue-500 mb-4 block">Navigation durch den Umbruch</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Drei Ebenen der Souveränität.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {architectureData.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-3xl border p-8 flex flex-col h-full relative overflow-hidden group transition-all duration-700 ${item.borderColor} ${item.bgColor} hover:border-blue-500/30`}
            >
              {/* Der Glow-Effekt, den du magst */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className={`p-2.5 rounded-xl bg-white/5 border border-white/5 ${item.textColor}`}>
                  <item.icon size={20} />
                </div>
                <span className="text-2xl font-black text-white/5 font-mono">{item.id}</span>
              </div>

              <div className="mb-8 relative z-10">
                <h3 className="text-3xl font-bold text-white mb-1">
                  {item.title}{item.isTrademark && <sup className="text-[9px] opacity-40">®</sup>}
                </h3>
                <p className={`font-serif italic text-xl mb-4 ${item.textColor}`}>{item.question}</p>
                <p className="text-slate-400 text-[17px] leading-relaxed min-h-[60px]">{item.description}</p>
              </div>

              {/* Fix für die Bild-Skalierung */}
              <div className="mt-auto pt-6">
                <div className="rounded-2xl overflow-hidden border border-white/10 h-48 sm:h-56 md:h-64 relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  />
                  {/* Subtiler Overlay für bessere Integration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExnovationSection;