// components/CompareDemo.tsx
"use client";

import React from "react";
import { Compare } from "@/src/components/ui/compare";

export function CompareDemo() {
  return (
    <section>
    <div className="flex flex-col justify-center items-center p-4 dark:bg-neutral-900 bg-[#161616] border-neutral-200 dark:border-neutral-800 px-4">
      <h2 className="mb-12 text-3xl font-bold text-[#f4d676]">
      Avant et Après
      </h2>
      <div className="flex gap-10">
      <Compare
        firstImage="/before.jpg"
        secondImage="/after.jpg"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
        slideMode="hover"
      />
      <Compare
        firstImage="/before1.png"
        secondImage="/after1.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
        slideMode="hover"
        
      />
      </div>
    </div>
    </section>
  );
}
