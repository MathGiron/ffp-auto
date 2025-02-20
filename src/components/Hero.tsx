"use client";

import React from "react";
import { motion } from "framer-motion";
import { Spotlight } from "@/src/components/ui/spotlight-new";

export default function Hero() {
  return (
    // Container principal inspirado no SpotlightNewDemo
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* Efeito Spotlight */}
      <Spotlight />

      {/* Conteúdo do Hero com framer-motion */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 flex flex-col gap-4 items-center justify-center text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#f4d676] to-[#af7837] bg-clip-text text-transparent">
        Bruno Auto : Excellence en Martelinho de Ouro
        </h1>
        <p className="mb-6 text-lg max-w-xl mx-auto text-neutral-300">
        La technologie et la tradition s’unissent pour préserver la beauté originale de votre véhicule.
        Faites confiance à la précision et à la qualité que seule Bruno Auto peut vous offrir.
        </p>
        <button className="relative p-[3px]">
          {/* Gradiente externo */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f4d676] to-[#af7837] rounded-lg" />
          {/* Botão interno */}
          <div className="relative px-8 py-2 bg-[#1f1f1f] rounded-[6px] group transition duration-200 text-white hover:text-black hover:bg-transparent">
          DEMANDEZ UN DEVIS
          </div>
        </button>
      </motion.div>
    </div>
  );
}
