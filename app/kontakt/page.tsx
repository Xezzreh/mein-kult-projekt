import React from 'react';

export default function Kontakt() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Kontakt aufnehmen</h1>
      
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <p className="text-gray-600 mb-8">
          Du hast Fragen zu unseren Projekten oder möchtest dich engagieren? Schreib uns einfach eine Nachricht. Wir freuen uns auf dich!
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Dein Name</label>
            <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition" placeholder="Max Mustermann" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">E-Mail-Adresse</label>
            <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition" placeholder="max@beispiel.de" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Deine Nachricht</label>
            <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition" placeholder="Wie können wir dir helfen?"></textarea>
          </div>

          <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition shadow-lg">
            Nachricht senden
          </button>
        </form>
      </div>
      
      <a href="/" className="inline-block mt-8 text-green-600 font-bold hover:underline">
        ← Zurück zur Startseite
      </a>
    </div>
  );
}