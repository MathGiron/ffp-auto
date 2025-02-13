// app/page.tsx
import Header from "../components/Header";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
