// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bruno Auto",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "128x128",
      url: "/Frame 55 1.png",
    },
  ],
  description: "Excelência em reparos automotivos – Martelinho de Ouro com precisão e qualidade.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Define o fundo global como o tom base escuro (#515353)
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-[#515353]`}>
        {children}
        
      </body>
    </html>
  );
}
