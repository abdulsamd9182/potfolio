import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#020617] text-white selection:bg-blue-500/30 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Education />
      <Projects />
      <Contact />
      <Footer />
      
    </main>
  );
}
