import React from 'react';

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-400 selection:bg-blue-500/30">
      <div className="max-w-3xl mx-auto px-8 py-24 md:py-32">
        <div className="mb-16">
          <span className="text-blue-500 text-xs uppercase tracking-[0.4em] font-bold">Integrität</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-4 tracking-tighter">Datenschutz</h1>
        </div>

        <div className="space-y-16 text-sm leading-relaxed">
          <section className="border-l border-zinc-800 pl-8">
            <h2 className="text-white text-xl font-bold mb-6 italic font-serif">1. Datenschutz auf einen Blick</h2>
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
          </section>

          <section className="border-l border-zinc-800 pl-8">
            <h2 className="text-white text-xl font-bold mb-6 italic font-serif">2. Hosting</h2>
            <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5 my-4">
              <p className="text-white font-bold mb-1 text-base">Hetzner Online GmbH</p>
              <p>Industriestr. 25, 91710 Gunzenhausen</p>
            </div>
            <p>Die Verwendung von Hetzner erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Wir haben einen Vertrag über Auftragsverarbeitung (AVV) geschlossen.</p>
          </section>

          <section className="border-l border-zinc-800 pl-8">
            <h2 className="text-white text-xl font-bold mb-6 italic font-serif">3. Allgemeine Hinweise</h2>
            <p className="text-zinc-300 mb-4">
              bluhumi (Dr.-Ing. Markus Blumenthal)<br />
              Dammbusch 20, 31275 Lehrte<br />
              E-Mail: markus@bluhumi.de
            </p>
            <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung.</p>
          </section>

          <section className="border-l border-zinc-800 pl-8">
            <h2 className="text-white text-xl font-bold mb-6 italic font-serif">4. Datenerfassung</h2>
            <div className="space-y-4">
              <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in Server-Log-Dateien (u.a. Browsertyp, Betriebssystem, IP-Adresse, Uhrzeit). Grundlage hierfür ist Art. 6 Abs. 1 lit. f DSGVO.</p>
              <p>Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage zum Zwecke der Bearbeitung bei uns gespeichert.</p>
            </div>
          </section>

          <div className="pt-12 border-t border-white/5 opacity-40">
            <p className="text-[10px] uppercase tracking-[0.4em]">Quelle: eRecht24</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;