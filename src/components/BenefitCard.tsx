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
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        {/* Container com altura fixa para o card */}
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-80 overflow-hidden rounded-2xl">
          {/* Header fixo e centralizado no topo */}
          <div className="absolute top- left-1/2 transform -translate-x-1/2 flex items-center">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
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
          {/* Descrição centralizada verticalmente */}
          <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 relative z-50">
            <p className="font-normal text-base text-slate-500">
              {description}
            </p>
          </div>
          {/* Botão opcional (pode ser posicionado na parte inferior se desejado)
          <div className="absolute bottom-4 inset-x-0 relative z-50">
            <button className="border mx-auto block px-4 py-1 rounded-lg border-gray-500 text-gray-300">
              {buttonText}
            </button>
          </div>
          */}
          {/* Efeito Meteor */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
