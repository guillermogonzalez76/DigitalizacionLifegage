import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Stats } from "./components/Stats";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Stats />
      <HowItWorks />
      <Features />
      <Footer />
    </div>
  );
}