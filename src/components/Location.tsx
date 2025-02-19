// components/WhoWeAre.tsx
"use client";

import React from "react";

export default function WhoWeAre() {
  return (
    <section className="py-16 bg-[#1b1b1b] text-center">
      <div className="container mx-auto px-4 max-w-3xl text-white">
        <h2 className="mb-8 text-3xl font-bold text-[#f4d676]">
          Qui sommes-nous ?
        </h2>
        <p className="mb-4 leading-relaxed">
          Avant tout, nous sommes <strong>une équipe de passionnés de l'automobile.</strong> 
          Notre objectif est d'offrir un service de qualité qui permet de redonner un aspect
          neuf aux véhicules sans abimer la peinture existante.
        </p>
        <p className="mb-4 leading-relaxed">
          Nous sommes des experts en techniques non invasives pour restaurer la forme originale
          des carrosseries de voiture. Nous travaillons auprès des professionnels de l'automobile 
          ainsi qu'aux particuliers dans l'Hérault et le Gard.
        </p>
        <p className="mb-4 leading-relaxed">
          Le <strong>débosselage sans peinture (DSP)</strong> est une technique de réparation
          automobile qui permet de réparer des bosses et des enfoncements dans la carrosserie
          d'un véhicule sans avoir besoin de repeindre la surface endommagée.
        </p>
        <p className="mb-4 leading-relaxed">
          Cette méthode est généralement préférée pour ses nombreux avantages, notamment
          sa rapidité, son coût réduit et la conservation de la peinture d'origine.
        </p>
      </div>
    </section>
  );
}
