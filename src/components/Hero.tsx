// components/Hero.tsx
"use client";

import { Button } from "../components/ui/button";

export default function Hero() {
  return (
    <section className="py-40  bg-[#1b1b1b] text-center">
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#f4d676] to-[#af7837] bg-clip-text text-transparent">
  Bruno Auto: Excelência em Martelinho de Ouro
</h1>
      <p className="mb-6 text-lg max-w-xl mx-auto text-white">
        Tecnologia e tradição se unem para preservar a beleza original do seu veículo.
        Confie na precisão e qualidade que só a Bruno Auto oferece.
      </p>
      <Button variant="outline" className="bg-[#1b1b1b]" >
        Solicitar Orçamento
      </Button>

    </section>
  );
}
