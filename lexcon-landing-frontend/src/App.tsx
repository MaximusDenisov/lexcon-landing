import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { LeadForm } from "./components/LeadForm";
import { Footer } from "./components/Footer"
import { useEffect } from "react";

function App() {
    useEffect(() => {
        if (!window.location.hash) {
          return;
        }

        const element = document.querySelector(window.location.hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 100);
        }
      }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Header />
      <Hero />
      <Services />
      <Process />
      <LeadForm />
      <Footer />
    </main>
  );
}

export default App;