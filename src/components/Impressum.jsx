import React from 'react';

const Impressum = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-400 selection:bg-blue-500/30">
      <div className="max-w-3xl mx-auto px-8 py-24 md:py-32">
        <div className="mb-16">
          <span className="text-blue-500 text-xs uppercase tracking-[0.4em] font-bold">Rechtliches</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-4 tracking-tighter">Impressum</h1>
        </div>

        <div className="space-y-12">
          <section className="border-l border-zinc-800 pl-8">
            <h2 className="text-white text-sm uppercase tracking-widest font-bold mb-4">Angaben gemäß § 5 TMG</h2>
            <div className="text-lg text-zinc-300 leading-relaxed font-light">
              <p className="font-bold text-white italic font-serif">bluhumi</p>
              <p>Dr.-Ing. Markus Blumenthal</p>
              <p>Dammbusch 20</p>
              <p>31275 Lehrte</p>
            </div>
          </section>

          <section className="border-l border-zinc-800 pl-8">
            <h2 className="text-white text-sm uppercase tracking-widest font-bold mb-4">Kontakt</h2>
            <div className="space-y-2">
              <p className="flex justify-between md:justify-start md:gap-8 border-b border-white/5 py-2">
                <span className="text-xs uppercase tracking-tighter font-bold text-zinc-500">Telefon</span>
                <span className="text-zinc-300">+49 160 9641 9075</span>
              </p>
              <p className="flex justify-between md:justify-start md:gap-8 border-b border-white/5 py-2">
                <span className="text-xs uppercase tracking-tighter font-bold text-zinc-500">E-Mail</span>
                <a href="mailto:markus@bluhumi.de" className="text-blue-400 hover:text-blue-300 transition-colors">markus@bluhumi.de</a>
              </p>
            </div>
          </section>

          <section className="border-l border-zinc-800 pl-8">
            <h2 className="text-white text-sm uppercase tracking-widest font-bold mb-4">Umsatzsteuer-ID</h2>
            <p className="text-sm text-zinc-400">Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
            <p className="text-lg text-white font-mono mt-2">DE329024657</p>
          </section>

          <section className="border-l border-zinc-800 pl-8">
            <h2 className="text-white text-sm uppercase tracking-widest font-bold mb-4">Verbraucherstreitbeilegung</h2>
            <p className="text-sm leading-relaxed">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          </section>

          <div className="pt-8 border-t border-white/5 opacity-40">
            <p className="text-[10px] uppercase tracking-widest">Quelle: eRecht24</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressum;