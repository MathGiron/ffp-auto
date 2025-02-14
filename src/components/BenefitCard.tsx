// components/BenefitCard.tsx
"use client";

import React from "react";
import { Meteors } from "../components/ui/meteors";

export interface MeteorsDemoProps {
  title: string;
  description: string;
  buttonText: string;
}

export function MeteorsDemo({
  title,
  description,
  buttonText,
}: MeteorsDemoProps) {
  return (
    <div className="">
      <div className="w-full relative max-w-xs">
        {/* Gradiente de fundo com z-index baixo */}
        <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-[#f4d676] to-[#af7837] transform scale-[0.80] rounded-full blur-3xl" />
        {/* Container do card com z-index alto para se sobrepor ao fundo */}
        <div className="relative z-10 shadow-xl bg-[#1b1b1b] border border-[#af7837] px-4 py-8 h-80 overflow-hidden rounded-2xl">
          {/* Header fixo e centralizado */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex items-center">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center border-[#af7837]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-[#af7837]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>
            <h1 className="font-bold text-3xl text-white ml-2">{title}</h1>
          </div>
          {/* Descrição centralizada verticalmente */}
          <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2  z-50">
            <p className="font-normal text-base text-slate-[#f3d576]">{description}</p>
          </div>
         
          {/* Efeito Meteor */}
          
        </div>
      </div>
    </div>
  );
}
