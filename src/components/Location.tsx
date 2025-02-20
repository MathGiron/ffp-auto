// components/WhoWeAre.tsx
"use client";

import React from "react";

export default function WhoWeAre() {
  return (
    <section id="whoweare" className="py-16 bg-[#1b1b1b] text-center">
      <div className="container mx-auto px-4 max-w-3xl text-white">
        <h2 className="mb-8 text-3xl font-bold text-[#f4d676]">
          Qui sommes-nous ?
        </h2>
        <p className="mb-4 leading-relaxed">
        Nous sommes avant tout une équipe de passionnés de l’automobile, dédiée à offrir un service de qualité pour redonner un aspect neuf aux véhicules sans endommager la peinture. Spécialistes en techniques non invasives, nous intervenons auprès de professionnels et de particuliers dans l’Hérault et le Gard. Notre méthode de débosselage sans peinture (DSP) répare bosses et enfoncements sans repeindre, assurant rapidité, coûts réduits et conservation de la peinture d’origine.
        </p>
      </div>
    </section>
  );
}
