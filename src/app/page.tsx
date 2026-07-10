import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Founder from "@/components/Founder";
import Books from "@/components/Books";
import Subjects from "@/components/Subjects";
import Teachers from "@/components/Teachers";
import Stats from "@/components/Stats";
import Certificates from "@/components/Certificates";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Founder />
        <Books />
        <Subjects />
        <Teachers />
        <Stats />
        <Certificates />
        <Process />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
