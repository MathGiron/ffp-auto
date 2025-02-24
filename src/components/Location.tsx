"use client";
import React from "react";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section id="whoweare" className="py-16 bg-[#1b1b1b] text-center">
      <div className="container mx-auto px-4 max-w-3xl text-white">
        <h2 className="mb-8 text-4xl font-bold text-[#f4d676]">
          Qui sommes-nous ?
        </h2>
        <p className="mb-4 leading-relaxed">
          Nous sommes avant tout une équipe de passionnés de l’automobile, dédiée à offrir un service de qualité pour redonner un aspect neuf aux véhicules sans endommager la peinture existante.
          Spécialistes en techniques non invasives, nous intervenons auprès des professionnels et des particuliers dans l’Hérault et le Gard.
          Notre méthode de débosselage sans peinture (DSP) répare bosses et enfoncements sans repeindre, assurant rapidité, coûts réduits et conservation de la peinture d’origine.
          Cette méthode est généralement préférée pour ses nombreux avantages, notamment sa rapidité, son coût réduit et la conservation de la peinture d’origine.
        </p>
        {/* Bloc d'images pour illustrer le service */}
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <div className="flex-1">
            <Image
              src="/slide 1.jpg"
              alt="Service Slide 1"
              width={600}
              height={400}
              className="w-full rounded-lg"
            />
          </div>
          <div className="flex-1">
            <Image
              src="/slide 2.jpg"
              alt="Service Slide 2"
              width={600}
              height={400}
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
