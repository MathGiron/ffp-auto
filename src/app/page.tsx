// app/page.tsx

import Header from "../components/Header";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import { CompareDemo } from "../components/CompareDemo";
import {CardStackDemo} from "../components/Testimonials";
import Footer from "../components/Footer";
import {ContactMechanicButton} from "../components/Contact"
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
        <ContactMechanicButton/>
        
      </main>
      <Footer />
      
    </>
  );
}
