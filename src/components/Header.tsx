// components/Header.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 w-full z-50 py-4"
      animate={{ backgroundColor: scrolled ? "#363636" : "#1F1F1F" }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4 h-12 flex justify-between items-center">
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
            <li className="text-sm text-white">
              Contato: (XX) XXXX-XXXX
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
