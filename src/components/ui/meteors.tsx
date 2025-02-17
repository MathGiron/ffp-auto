import { cn } from "@/src/lib/utils";
import React from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 20).fill(true);
  return (
    <>
      <style jsx>{`
        @keyframes meteor {
          0% {
            transform: rotate(215deg) translateX(300px);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: rotate(215deg) translateX(-300px);
            opacity: 0;
          }
        }
        .animate-meteor {
          animation: meteor 5s linear infinite;
        }
      `}</style>
      {meteors.map((_, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor absolute z-0 h-0.5 w-0.5 rounded-full bg-[#3d3d3d] shadow-[0_0_0_1px_#ffffff10] opacity-20",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-1/2 before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#3d3d3d] before:to-transparent",
            className
          )}
          style={{
            top: `${Math.floor(Math.random() * 100)}%`,
            left: `${Math.floor(Math.random() * 100)}%`,
            animationDelay: `${(Math.random() * 0.6 + 0.2).toFixed(2)}s`,
            animationDuration: `${Math.floor(Math.random() * 8 + 2)}s`,
          }}
        ></span>
      ))}
    </>
  );
};
