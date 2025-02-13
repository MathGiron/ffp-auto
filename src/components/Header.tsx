// components/Header.tsx
import Image from "next/image";

export default function Header() {
  return (
    <header className="p-4 bg-[#515353] flex justify-between items-center h-20">
      <div className="flex items-center">
        {/* A logo substitui o texto; ajuste o caminho/nome e dimensões conforme necessário */}
        <Image 
          src="/Frame33.png" 
          alt="Logo Bruno Auto" 
          width={200} 
          height={50} 
          className="object-contain"
        />
      </div>
      <div className="text-sm text-[#f4d676]">Contato: (XX) XXXX-XXXX</div>
    </header>
  );
}
