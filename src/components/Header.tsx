"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast"; // Certifique-se do caminho correto

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
        <Image 
          src="/Frame33.png" 
          alt="Logo Bruno Auto" 
          width={200} 
          height={50} 
          className="object-contain"
        />
        <nav>
          <ul className="flex space-x-6 items-center">
            <li>
              <Link 
                href="#features" 
                className="text-white transition-colors hover:bg-gradient-to-r hover:from-[#f4d676] hover:to-[#af7837] hover:bg-clip-text hover:text-transparent"
              >
                Diferenciais
              </Link>
            </li>
            <li>
              <Link 
                href="#pricing" 
                className="text-white transition-colors hover:bg-gradient-to-r hover:from-[#f4d676] hover:to-[#af7837] hover:bg-clip-text hover:text-transparent"
              >
                Depoimentos
              </Link>
            </li>
            <li>
              <Link 
                href="#about" 
                className="text-white transition-colors hover:bg-gradient-to-r hover:from-[#f4d676] hover:to-[#af7837] hover:bg-clip-text hover:text-transparent"
              >
                Localização
              </Link>
            </li>
            <li>
              <button
                onClick={handleCopyContact}
                className="flex items-center text-white hover:text-gray-300 transition-colors"
              >
                {/* Ícone de telefone */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a2 2 0 011.79 1.11l1.14 2.28a2 2 0 01-.45 2.11L8.14 9.86a11.042 11.042 0 005 5l1.21-1.21a2 2 0 012.11-.45l2.28 1.14A2 2 0 0121 15.72V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V5z"
                  />
                </svg>
                {contactNumber}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
