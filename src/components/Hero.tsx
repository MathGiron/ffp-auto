"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/src/components/ui/aurora-background";
import { Button } from "../components/ui/button";

export default function Hero() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 py-40 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#f4d676] to-[#af7837] bg-clip-text text-transparent">
          Bruno Auto: Excelência em Martelinho de Ouro
        </h1>
        <p className="mb-6 text-lg max-w-xl mx-auto text-white">
          Tecnologia e tradição se unem para preservar a beleza original do seu veículo.
          Confie na precisão e qualidade que só a Bruno Auto oferece.
        </p>
        <Button variant="outline" className="bg-[#1b1b1b]">
          Solicitar Orçamento
        </Button>
      </motion.div>
    </AuroraBackground>
  );
}
