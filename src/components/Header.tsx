"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast"; // Ajuste o caminho conforme seu projeto

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const contactNumber = "+33 6 88 59 3845";

  const handleCopyContact = async () => {
    try {
      await navigator.clipboard.writeText(contactNumber);
      toast({
        title: "Contato Copiado",
        description: `Número copiado: ${contactNumber}`,
      });
    } catch (error) {
      console.error("Erro ao copiar número:", error);
      toast({
        title: "Erro",
        description: "Falha ao copiar o número de contato.",
        variant: "destructive",
      });
    }
  };

  return (
    <motion.header
      className="fixed top-0 w-full z-50 py-4"
      animate={{ backgroundColor: scrolled ? "#363636" : "#1F1F1F" }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-10 h-12 flex justify-between items-center">
        {/* Logo */}
        <Image
          src="/Frame33.png"
          alt="Logo Bruno Auto"
          width={200}
          height={50}
          className="object-contain"
        />

        {/* Links (somente desktop) */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 items-center">
            <li>
              <Link
                href="#diferenciais"
                scroll={true}
                className="text-white transition-colors hover:bg-gradient-to-r hover:from-[#f4d676] hover:to-[#af7837] hover:bg-clip-text hover:text-transparent"
              >
                Témoignages
              </Link>
            </li>
            <li>
              <Link
                href="#before-and-after"
                scroll={true}
                className="text-white transition-colors hover:bg-gradient-to-r hover:from-[#f4d676] hover:to-[#af7837] hover:bg-clip-text hover:text-transparent"
              >
                Avant et Après

              </Link>
            </li>
            <li>
              <Link
                href="#whoweare"
                scroll={true}
                className="text-white transition-colors hover:bg-gradient-to-r hover:from-[#f4d676] hover:to-[#af7837] hover:bg-clip-text hover:text-transparent"
              >
                Qui sommes-nous
              </Link>
            </li>
          </ul>
        </nav>

        {/* Botão (visível em qualquer tamanho) */}
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ml-4">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#af7837_50%,#f4d676_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center 
                  rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white hover:bg-gradient-to-r from-[#f4d676] to-[#af7837] hover:text-black
                  backdrop-blur-3xl"
                >
                  DEMANDEZ UN DEVIS
                </span>
        </button>
      </div>
    </motion.header>
  );
}
