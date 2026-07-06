"use client";
import { motion } from "framer-motion";
import { projekte } from "../../data/projekte";
import Link from "next/link";

export default function ProjektePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-12">Unsere Projekte</h1>
      
      <motion.div 
        className="grid md:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {projekte.map((p, index) => (
          <motion.div 
            key={p.id} 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition"
          >
            {/* Bild oben */}
            <img src={p.bildUrl} alt={p.titel} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{p.titel}</h2>
              <p className="text-green-600 font-semibold text-sm mb-4">{p.foerderer}</p>
              <p className="text-gray-600 text-sm mb-6">{p.kurzText}</p>
              <Link href={`/projekte/${p.id}`} className="block text-center bg-green-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-green-700 transition">
                Mehr erfahren
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}