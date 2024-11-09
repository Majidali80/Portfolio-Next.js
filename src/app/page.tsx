import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Navbar from '../components/Navbar';
import About from '../components/About';
import Skills from '../components/Skills';
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects/>
      <About />
      <Skills />
      <EmailSection />

      <Footer />
      
    </main>
      );
}
