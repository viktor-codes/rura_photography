import { Hero } from "../components/Hero";
import { Stats } from "../components/Stats";
import { Portfolio } from "../components/Portfolio";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { Process } from "../components/Process";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Stats />
        <Portfolio />
        <Services />
        <About />
        <Process />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
