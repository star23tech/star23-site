import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Problems from "./components/Problems";
import Solutions from "./components/Solutions";
import WhyStar23 from "./components/WhyStar23";
import Process from "./components/Process";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Problems />
        <Solutions />
        <WhyStar23 />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
