// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/src/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bruno Auto",
  description: "Excelência em reparos automotivos – Martelinho de Ouro com precisão e qualidade.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Define o fundo global como o tom base escuro (#515353)
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-[#515353]`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
