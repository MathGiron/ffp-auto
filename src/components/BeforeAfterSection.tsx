// components/BeforeAfterSection.tsx
"use client";

import Image from "next/image";
import React from "react";

export default function BeforeAfterSection() {
  return (
    <section className="py-16 bg-[#1f1f1f] text-center">
      <h2 className="mb-12 text-3xl font-bold text-[#f4d676]">
        Transformações
      </h2>
      <div className="mx-auto max-w-[1480px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center ">
        
          {/* Card Antes */}
          <div className="relative">
            <Image
              src="/before.jpg"
              alt="Antes"
              width={500}
              height={300}
              className="object-cover rounded-lg"
            />
            <span className="absolute bottom-2 left-2 bg-[#1b1b1b] text-white px-3 py-1 rounded-full text-sm">
              Antes
            </span>
          </div>
          {/* Card Depois */}
          <div className="relative">
            <Image
              src="/after.jpg"
              alt="Depois"
              width={500}
              height={300}
              className="object-cover rounded-lg"
            />
            <span className="absolute bottom-2 left-2 bg-[#1b1b1b] text-white px-3 py-1 rounded-full text-sm">
              Depois
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
