// components/Hero.tsx
"use client";

import { Button } from "../components/ui/button";

export default function Hero() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#f4d676] to-[#af7837] text-center">
      <h1 className="text-4xl font-bold mb-4 text-[#515353]">
        Bruno Auto: Excelência em Martelinho de Ouro
      </h1>
      <p className="mb-6 text-lg max-w-xl mx-auto text-[#515353]">
        Tecnologia e tradição se unem para preservar a beleza original do seu veículo. 
        Confie na precisão e qualidade que só a Bruno Auto oferece.
      </p>
      <Button onClick={() => console.log("Solicitar Orçamento")}>
        Solicitar Orçamento
      </Button>
    </section>
  );
}
