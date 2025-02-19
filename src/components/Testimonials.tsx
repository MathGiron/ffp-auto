"use client";
import { CardStack } from "@/src/components/ui/card-stack";
import { cn } from "@/src/lib/utils";

export function CardStackDemo() {
  return (
    <div className="h-[30rem] bg-[#1f1f1f] flex flex-col items-center justify-center w-full">
      <h2 className="p-10 mb-12 text-3xl font-bold text-[#f4d676]">
        Depoimentos
      </h2>
      <CardStack items={CARDS} />
    
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-[#2e3e41] text-[#5ab8f7] dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 1,
    name: "Daniel Manzoni",
    designation: "Client",
    content: (
      <p>
        Super <Highlight>travail de qualité et de précision</Highlight>. 
        Équipe <Highlight>sérieuse et très sympathique</Highlight>, à l’écoute du client. 
        Résultats <Highlight>très satisfaisants et conformes à mes attentes</Highlight>. 
        <Highlight>Je recommande</Highlight>.
        <br />
        <span className="text-xs text-gray-400">
          Visitado en février - une semaine atrás
        </span>
      </p>
    ),
  },
  {
    id: 2,
    name: "Olivier Chabaud",
    designation: "Client",
    content: (
      <p>
        <Highlight>Super travail sur 2 portières</Highlight> 🤩🤩 – un travail de{" "}
        <Highlight>très grande qualité</Highlight> et en plus,{" "}
        <Highlight>Bruno est très sympa</Highlight>. Bref,{" "}
        <Highlight>un client heureux, donc un client qui recommande</Highlight> !!
        <br />
        <span className="text-xs text-gray-400">
          Visitado em fevereiro, 6 dias atrás
        </span>
      </p>
    ),
  },
  {
    id: 3,
    name: "Suzze",
    designation: "Client",
    content: (
      <p>
        <Highlight>Équipe au top</Highlight> – travail soigné et professionnel, je recommande. 👍🏻
        <br />
        <span className="text-xs text-gray-400">
          Visitado em janeiro, 4 semanas atrás
        </span>
      </p>
    ),
  },
  {
    id: 4,
    name: "Jimmy Rolly",
    designation: "Client",
    content: (
      <p>
        <Highlight>Très professionnel</Highlight>, le travail est bien fait avec une finition parfaite! Merci à vous.
        <br />
        <span className="text-xs text-gray-400">
          Visitado em fevereiro, 2 dias atrás
        </span>
      </p>
    ),
  }
];
