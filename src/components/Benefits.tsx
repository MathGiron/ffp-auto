// components/Benefits.tsx
"use client";

import React from "react";
import { MeteorsDemo } from "../components/BenefitCard";

export default function Benefits() {
  const benefits = [
    {
      title: "Precisão",
      description: "Reparos milimétricos que restauram a beleza original do seu veículo. Confie na Bruno Auto para resultados que impressionam.",
      buttonText: "Saiba Mais",
    },
    {
      title: "Qualidade",
      description:
        "Uso de tecnologia avançada e materiais premium para um acabamento superior. Experimente a excelência que valoriza seu carro.",
      buttonText: "Saiba Mais",
    },
    {
      title: "Confiabilidade",
      description:
        "Serviços transparentes e seguros, garantindo sua total confiança. Escolha Bruno Auto para cuidar do seu investimento.",
      buttonText: "Saiba Mais",
    },
  ];

  return (
    <section className="relative overflow-hidden py-20 bg-[#1F1F1F] text-center">
      <h2 className="mb-12 text-3xl font-bold text-[#f4d676]">
        Nossos Diferenciais
      </h2>
      <div className="flex justify-center gap-8 relative z-10">
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
