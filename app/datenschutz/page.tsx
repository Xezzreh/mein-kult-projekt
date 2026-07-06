import React from 'react';

export default function Datenschutz() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Datenschutz</h1>
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <p className="text-gray-600 leading-relaxed">
          [Platzhalter für das Datenschutz - Hier folgen die offiziellen Angaben zum Verein, 
          inklusive Vertretungsberechtigten, Vereinsregister-Nummer und Kontaktdaten.]
        </p>
      </div>
      <a href="/" className="inline-block mt-8 text-green-600 font-bold hover:underline">
        ← Zurück zur Startseite
      </a>
    </div>
  );
}