import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import BookingFlow from "./components/BookingFlow";
import Footer from "./components/Footer";

export default function App() {
  const [preService, setPreService] = useState(null);

  const pickService = (id) => {
    setPreService(id);
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-coal font-sans text-bone antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services onPick={pickService} />
        <BookingFlow
          preService={preService}
          onConsumePre={() => setPreService(null)}
        />
      </main>
      <Footer />
    </div>
  );
}
