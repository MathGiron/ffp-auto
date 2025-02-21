"use client";

import React, { FormEvent } from "react";
import { Label } from "@/src/components/ui/label";
import { Input } from "@/src/components/ui/input";
import { cn } from "@/src/lib/utils";

export function ContactMechanicForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 1) Capturar os valores de cada campo
    const form = e.currentTarget;

    const firstname = (form.querySelector("#firstname") as HTMLInputElement)?.value;
    const lastname = (form.querySelector("#lastname") as HTMLInputElement)?.value;
    const phone = (form.querySelector("#phone") as HTMLInputElement)?.value;
    const email = (form.querySelector("#email") as HTMLInputElement)?.value;
    const description = (form.querySelector("#description") as HTMLTextAreaElement)?.value;

    // 2) Montar o texto a ser enviado
    const message = `Olá, aqui estão os detalhes do formulário:

• Nom: ${firstname}
• Prénom: ${lastname}
• Téléphone: ${phone}
• Email: ${email}
• Problème: ${description}
`;

    // 3) Codificar e redirecionar para o link do WhatsApp (ou abrir em nova aba)
    const encodedMessage = encodeURIComponent(message.trim());
    // Exemplo usando seu link com `?text=...`
    const whatsAppLink = `https://wa.me/message/Z2OSV4FHUEMUN1?text=${encodedMessage}`;

    // Abrir em nova aba (opcional) ou no mesmo
    window.open(whatsAppLink, "_blank");
  };

  return (
    <section className="py-16 bg-[#1b1b1b] text-center">
      <div
        className="
          max-w-md w-full mx-auto
          rounded-lg md:rounded-2xl
          p-4 md:p-8
          shadow-input bg-[#292929]
          border border-[#f4d676]
        "
      >
        <h2 className="font-bold text-xl text-[#f4d676]">Demandez votre devis</h2>
        <p className="text-white text-sm max-w-sm mt-2">
          Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
        </p>

        <form className="my-8 text-left" onSubmit={handleSubmit}>
          {/* Nome e Sobrenome */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname" className="text-[#f4d676]">
                Nom
              </Label>
              <Input id="firstname" placeholder="Ex: John" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname" className="text-[#f4d676]">
                Prénom
              </Label>
              <Input id="lastname" placeholder="Ex: Smith" type="text" />
            </LabelInputContainer>
          </div>

          {/* Telefone */}
          <LabelInputContainer className="mb-4">
            <Label htmlFor="phone" className="text-[#f4d676]">
              Téléphone
            </Label>
            <Input id="phone" placeholder="(xx) x xx xx xx xx" type="tel" />
          </LabelInputContainer>

          {/* Email */}
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email" className="text-[#f4d676]">
              Email
            </Label>
            <Input id="email" placeholder="exemple@domaine.com" type="email" />
          </LabelInputContainer>

          {/* Descrição do Problema */}
          <LabelInputContainer className="mb-4">
            <Label htmlFor="description" className="text-[#f4d676]">
              Décrivez le problème
            </Label>
            <textarea
              id="description"
              placeholder="Ex: Rayures sur la porte, bosse sur l’aile..."
              rows={4}
              className="
                border
                bg-white
                rounded
                p-2
                w-full
                bg-transparent
                text-black
                placeholder:text-neutral-400
                focus:outline-none
                focus:ring-1
                focus:ring-[#af7837]
              "
            ></textarea>
          </LabelInputContainer>

          {/* Botão centralizado */}
          <div className="flex justify-center">
            <button className="relative p-[3px]" type="submit">
              {/* Gradiente externo */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#f4d676] to-[#af7837] rounded-lg" />
              {/* Botão interno */}
              <div className="relative px-8 py-2 bg-[#1f1f1f] rounded-[6px] group transition duration-200 text-white hover:text-black hover:bg-transparent">
                FAÇA UM ORÇAMENTO
              </div>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
