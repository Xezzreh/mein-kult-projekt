"use client";
import { motion } from "framer-motion";
import React from 'react';

export default function Home() {
  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
      
      {/* --- HEADER --- */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              K
            </div>
            <span className="text-2xl font-extrabold text-green-700 tracking-tight">K.U.L.T. e.V.</span>
          </div>
          <nav className="hidden md:flex space-x-8 font-medium text-gray-600">
            <a href="/" className="hover:text-green-600 transition-colors">Start</a>
            <a href="/projekte" className="hover:text-green-600 transition-colors">Projekte</a>
            <a href="/ueber-uns" className="hover:text-green-600 transition-colors">Über uns</a>
            <a href="/kontakt" className="hover:text-green-600 transition-colors">Kontakt</a>
          </nav>
        </div>
      </header>

      {/* --- HERO BANNER (REAKTIV) --- */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        // Wir ändern die Höhe: h-80 auf dem Handy, h-[500px] auf größeren Bildschirmen
        className="relative h-[400px] md:h-[500px] w-full overflow-hidden bg-green-800"
      >
        {/* Bild-Hintergrund mit "z-0" damit es ganz hinten ist */}
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070')" }}></div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-700/60 z-10" />
        
        {/* Inhalt mit flexbox zentriert */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 space-y-4 md:space-y-6">
          <h1 className="text-3xl md:text-6xl font-extrabold text-white leading-tight">
            Gemeinsam wachsen, <br/>
            <span className="text-green-300">lernen und gestalten.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Der K.U.L.T. e.V. in Berlin ist dein gemeinnütziger Verein für integrative Kinder-, Jugend-, Bildungs- und Kulturarbeit.
          </p>
          <div className="flex gap-4 pt-4">
            <button className="bg-white text-green-700 px-6 md:px-8 py-2 md:py-3 rounded-full font-bold text-md md:text-lg hover:bg-green-50 transition shadow-lg">
              Mitmachen
            </button>
          </div>
        </div>
      </motion.section>

      {/* ... (Rest der Schwerpunkte bleibt gleich) ... */}
      
      <section id="projekte" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Unsere Schwerpunkte</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-green-600 text-2xl mb-6">📚</div>
              <h3 className="text-xl font-bold mb-3">Kinder- & Jugendarbeit</h3>
              <p className="text-gray-600">Wir unterstützen mit Sprachförderung, Nachhilfe und verlässlicher Betreuung.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-green-600 text-2xl mb-6">🌍</div>
              <h3 className="text-xl font-bold mb-3">Integration & Soziales</h3>
              <p className="text-gray-600">Aktive Unterstützung für Geflüchtete und spezielle Hilfsprojekte für ein solidarisches Miteinander.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-green-600 text-2xl mb-6">🤝</div>
              <h3 className="text-xl font-bold mb-3">Gemeinschaft</h3>
              <p className="text-gray-600">Generationenübergreifende Spieletreffs, interkulturelle Begegnungen und sichere Erfahrungsräume.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}