import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Subjects from "@/components/Subjects";
import Process from "@/components/Process";
import Certificates from "@/components/Certificates";
import Teachers from "@/components/Teachers";
import Testimonials from "@/components/Testimonials";
import Founder from "@/components/Founder";
import Books from "@/components/Books";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <Subjects />
        <Process />
        <Certificates />
        <Teachers />
        <Testimonials />
        <Founder />
        <Books />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
