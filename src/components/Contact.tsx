"use client";

import React from "react";

const copyPhoneNumber = () => {
  navigator.clipboard.writeText("+33688593845");
  alert("Número copiado para a área de transferência!");
};


export function ContactMechanicButton() {
  const handleOrcamento = () => {
    const whatsAppLink = "https://wa.me/message/Z2OSV4FHUEMUN1";
    window.open(whatsAppLink, "_blank");
  };

  return (
    <section className="py-18 p-10 bg-[#1b1b1b] text-center flex flex-col items-center">
      {/* Título mais proeminente */}
      <h2 className="mb-6 text-4xl font-bold text-[#f4d676]">
        Demandez votre devis
      </h2>

      {/* Descrição em destaque */}
      <p className="text-white text-base md:text-lg max-w-2xl mb-10">
        Cliquez sur le bouton ci-dessous pour ouvrir une conversation WhatsApp
        et demander votre devis. Profitez de notre expertise pour redonner un
        aspect neuf à votre véhicule.
      </p>

      {/* Número de telefone com função de copiar */}
      <span
            onClick={copyPhoneNumber}
            className="text-white cursor-pointer text-xl transition-colors p-4 hover:bg-gradient-to-r hover:from-[#f4d676] hover:to-[#af7837] hover:bg-clip-text hover:text-transparent"
          >
            +33 6 88 59 3845
          </span>
      

      {/* Botão grande */}
      <button
        onClick={handleOrcamento}
        className="relative p-[3px] inline-block"
        type="button"
      >
        {/* Gradiente externo */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f4d676] to-[#af7837] rounded-lg" />
        {/* Botão interno */}
        <div className="relative px-10 py-4 bg-[#1f1f1f] rounded-[6px] group transition duration-200 text-white text-lg font-semibold hover:text-black hover:bg-transparent">
        C’EST GRATUIT
        </div>
      </button>
    </section>
  );
}
