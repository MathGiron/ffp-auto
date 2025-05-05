"use client";

import React from "react";
import { motion } from "framer-motion";
import { Spotlight } from "@/src/components/ui/spotlight-new";

export default function Hero() {

  const handleWhatsApp = () => {
    // Redireciona para o link do WhatsApp em nova aba
    window.open("https://wa.me/message/Z2OSV4FHUEMUN1", "_blank");
  };

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
        Bruno Auto : Excellence en Débosselage sans Peinture
        </h1>
        <p className="mb-6 text-lg max-w-xl mx-auto text-neutral-300">
        Si votre véhicule à subi des impacts de grêle, des coup de portière ou des coup de caddie...
        Si votre véhicule est en location (LOA/LDD) et que vous devez le restituer... 
        Si vous souhaitez revendre votre véhicule. 
        Alliant technologie de pointe et savoir-faire traditionnel, Bruno Auto intervient sur place pour restaurer 
        la beauté d’origine de votre véhicule, en offrant un service 3 fois plus rapide, économique et respectueux de l’environnement.
        </p>
        <button onClick={handleWhatsApp} className="relative p-[3px]">
          
          {/* Gradiente externo */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f4d676] to-[#af7837] rounded-lg" />
          {/* Botão interno */}
          <div className="relative px-8 py-2 bg-[#1f1f1f] rounded-[6px] group transition duration-200 text-white hover:text-black hover:bg-transparent">
            
          C’EST GRATUIT
          </div>
        </button>
      </motion.div>
    </div>
  );
}
