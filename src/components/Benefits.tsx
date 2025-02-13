// components/Benefits.tsx
"use client";

import React from "react";
import { MeteorsDemo } from "../components/BenefitCard";

export default function Benefits() {
  const benefits = [
    {
      title: "Precisão",
      description: "Reparos exatos que preservam a originalidade do seu veículo.",
      buttonText: "Saiba Mais",
    },
    {
      title: "Qualidade",
      description:
        "Técnicas modernas e materiais de alta performance para resultados impecáveis.",
      buttonText: "Saiba Mais",
    },
    {
      title: "Confiabilidade",
      description:
        "Serviço transparente e eficiente, com garantia de satisfação.",
      buttonText: "Saiba Mais",
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 bg-[#1b1b1b] text-center">
      <h2 className="mb-12 text-3xl font-bold text-[#f4d676]">
        Nossos Diferenciais
      </h2>
      <div className="flex justify-center gap-5 relative z-10">
        {benefits.map((item, idx) => (
          <MeteorsDemo
            key={idx}
            title={item.title}
            description={item.description}
            buttonText={item.buttonText}
          />
        ))}
      </div>
      <div className="absolute inset-0 pointer-events-none">
        {/* Opcional: efeito decorativo adicional */}
      </div>
    </section>
  );
}
