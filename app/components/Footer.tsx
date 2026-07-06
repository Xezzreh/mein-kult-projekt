import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-12">
        
        {/* Spalte 1: Mission */}
        <div>
          <h3 className="font-bold text-green-700 text-lg mb-4">K.U.L.T. e.V.</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Gemeinnütziger Verein für integrative Kinder-, Jugend-, Bildungs- und Kulturarbeit in Berlin-Lichtenberg.
          </p>
        </div>

        {/* Spalte 2: Navigation */}
        <div>
          <h4 className="font-bold text-gray-900 mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="/" className="hover:text-green-600">Startseite</a></li>
            <li><a href="/projekte" className="hover:text-green-600">Unsere Projekte</a></li>
            <li><a href="/ueber-uns" className="hover:text-green-600">Über uns</a></li>
            <li><a href="/kontakt" className="hover:text-green-600">Kontakt</a></li>
          </ul>
        </div>

        {/* Spalte 3: Rechtliches */}
        <div>
          <h4 className="font-bold text-gray-900 mb-4">Rechtliches</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="/impressum" className="hover:text-green-600">Impressum</a></li>
            <li><a href="/datenschutz" className="hover:text-green-600">Datenschutz</a></li>
          </ul>
        </div>
      </div>
      
      <div className="text-center text-sm text-gray-400 mt-12 pt-8 border-t border-gray-50">
        © 2026 K.U.L.T. e.V. Berlin
      </div>
    </footer>
  );
}