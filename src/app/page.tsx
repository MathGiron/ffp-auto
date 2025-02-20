// app/page.tsx

import Header from "../components/Header";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import { CompareDemo } from "../components/CompareDemo";
import {CardStackDemo} from "../components/Testimonials";
import {ContactMechanicForm} from "../components/ContactForm";
import Footer from "../components/Footer";
import AnimatedTestimonialsDemo from "../components/Location"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <CompareDemo/>
        <CardStackDemo />
        <AnimatedTestimonialsDemo/>
        <ContactMechanicForm />
      </main>
      <Footer />
      
    </>
  );
}
