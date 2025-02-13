// components/ContactForm.tsx
"use client";

export default function ContactForm() {
  return (
    <section className="py-16 bg-[#ebe9e9] text-center">
      <h2 className="text-3xl font-bold mb-8 text-[#af7837]">
        Entre em Contato
      </h2>
      <form className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Nome"
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Mensagem"
          className="w-full p-2 border rounded"
          rows={4}
        ></textarea>
        <button
          type="submit"
          className="px-6 py-2 bg-[#af7837] text-white rounded hover:bg-[#f4d676]"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
