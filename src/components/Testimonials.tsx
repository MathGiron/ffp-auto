// components/Testimonials.tsx
export default function Testimonials() {
  return (
    <section className="py-16 bg-[#f4d676] text-center">
      <h2 className="text-3xl font-bold mb-8 text-[#515353]">
        Depoimentos
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        <blockquote className="italic text-[#515353]">
          "A Bruno Auto transformou o meu carro. A qualidade e a precisão do serviço são incomparáveis!"
        </blockquote>
        <cite className="block text-[#515353]">- Cliente Satisfeito</cite>
      </div>
    </section>
  );
}
