import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { TrustRibbon } from './components/TrustRibbon';
import { Problem } from './components/Problem';
import { Features } from './components/Features';
import { Metrics } from './components/Metrics';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg text-secondary relative isolate">
      <div className="fixed inset-0 pointer-events-none grid-lines opacity-40 -z-10" />
      <Nav />
      <main>
        <Hero />
        <TrustRibbon />
        <Problem />
        <Features />
        <Metrics />
        <Pricing />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
