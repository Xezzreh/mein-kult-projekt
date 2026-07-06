import { projekte } from "../../../data/projekte";
import { notFound } from "next/navigation";

export default async function ProjektDetail({ params }: { params: { id: string } }) {
  const projekt = projekte.find((p) => p.id === params.id);
  if (!projekt) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Großes Header Bild */}
      <img src={projekt.bildUrl} alt={projekt.titel} className="w-full h-80 object-cover rounded-3xl mb-8 shadow-xl" />
      
      <h1 className="text-5xl font-extrabold mb-4">{projekt.titel}</h1>
      <div className="bg-green-100 inline-block px-4 py-1 rounded-full text-green-800 font-bold mb-8">
        Gefördert durch: {projekt.foerderer}
      </div>
      <div className="text-lg text-gray-700 leading-relaxed">
        <p>{projekt.beschreibung}</p>
      </div>
      <a href="/projekte" className="inline-block mt-12 text-green-600 font-bold hover:underline">
        ← Zurück zur Übersicht
      </a>
    </div>
  );
}