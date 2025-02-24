"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval: ReturnType<typeof setInterval>;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 5000);
  };

  return (
    <div
      className="
        relative
        h-72 w-[300px]
        sm:h-80 sm:w-[350px]
        md:h-60 md:w-[700px]
      "
    >
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className={`
            absolute dark:bg-black bg-[#292929] rounded-3xl p-4 shadow-xl
            border border-[#f3d576] dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05]
            flex flex-col justify-between
            h-72 w-[300px]
            sm:h-80 sm:w-[350px]
            md:h-60 md:w-[700px]
          `}
          style={{
            transformOrigin: "top center",
          }}
          animate={{
            top: index * -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR,
            zIndex: cards.length - index,
          }}
        >
          <div className="font-normal text-[#f3d576] dark:text-neutral-200">
            {card.content}
          </div>
          <div>
            <p className="text-neutral-500 font-medium dark:text-white">
              {card.name}
            </p>
            <p className="text-neutral-400 font-normal dark:text-neutral-200">
              {card.designation}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
