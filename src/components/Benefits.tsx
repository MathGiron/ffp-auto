// components/Benefits.tsx
"use client";

import React from "react";
import { MeteorsDemo } from "../components/BenefitCard";

export default function Benefits() {
  const benefits = [
    {
      title: "Précision",
      description:
        "Reparos milimétricos que restauram a Réparations millimétriques qui redonnent à votre véhicule toute sa beauté d’origine. Faites confiance à Bruno Auto pour des résultats impressionnants. original do seu veículo. Confie na Bruno Auto para resultados que impressionam.",
      buttonText: "Saiba Mais",
    },
    {
      title: "Qualité",
      description:
        "Uso de tecnologia avançada e materiais premium para um acL’utilisation d’une technologie de pointe et de matériaux haut de gamme assure une finition supérieure. Découvrez l’excellence qui valorise votre véhicule.abamento superior.",
      buttonText: "Saiba Mais",
    },
    {
      title: "Fiabilité",
      description:
        "Serviços transparentes e seguros, Des services transparents et sécurisés, vous garantissant une confiance totale. Choisissez Bruno Auto pour prendre soin de votre investissement. sua total confiança. Escolha Bruno Auto para cuidar do seu investimento.",
      buttonText: "Saiba Mais",
    },
  ];

  return (
    <section
      id="diferenciais"
      className="relative overflow-hidden py-20 bg-[#1F1F1F] text-center"
    >
      <h2 className="mb-12 text-3xl font-bold text-[#f4d676]">
        Nossos Diferenciais
      </h2>

      {/* 
        Em telas menores (mobile), vira carrossel horizontal (overflow-x-auto).
        Em telas md+ (desktop), exibe os cards lado a lado normalmente. 
      */}
      <div
        className="
          relative z-10 
          flex gap-8 
          overflow-x-auto snap-x snap-mandatory px-4
          md:px-0 md:overflow-x-visible md:justify-center
        "
      >
        {benefits.map((item, idx) => (
          <div
            key={idx}
            // Em mobile, cada card tem min-w para aparecer como "slide".
            // Em desktop, liberamos min-w para usar layout normal.
            className="
              snap-center flex-shrink-0 
              w-full max-w-xs md:min-w-0
            "
          >
            <MeteorsDemo
              title={item.title}
              description={item.description}
              buttonText={item.buttonText}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none">{/* Efeito decorativo opcional */}</div>
    </section>
  );
}
