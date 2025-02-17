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
        {/* Container do card (z-10) */}
        <div className="relative z-10 shadow-xl bg-[#1b1b1b] border border-[#af7837] px-4 py-8 h-80 overflow-hidden rounded-2xl">
          {/* Container absoluto para os meteoros (z-0) */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Meteors number={20} />
          </div>
          {/* Header fixo e centralizado (z-10) */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex items-center z-10">
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
            <h1 className="font-bold text-3xl text-white ml-2">
              {title}
            </h1>
          </div>
          {/* Descrição centralizada verticalmente (z-10) */}
          <div className="relative inset-x-0 top-1/2 transform -translate-y-1/2 z-10 text-center">
            <p className="font-normal text-base text-[#f3d576]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
