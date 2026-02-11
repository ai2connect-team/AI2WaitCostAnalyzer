import { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Calculator, { DEFAULT_VALUES } from './components/Calculator';
import Results from './components/Results';
import Footer from './components/Footer';
import { calculateDemurrage } from './utils/calculations';

/**
 * Root application component — light theme layout.
 * Centered container with balanced two-column grid.
 */
export default function App() {
  const [values, setValues] = useState(DEFAULT_VALUES);

  const handleValueChange = (field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const results = useMemo(() => calculateDemurrage(values), [values]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header + Hero share the gradient background */}
      <div className="hero-gradient">
        <Header />
        <Hero />
      </div>

      {/* Calculator Section */}
      <main id="calculator" className="flex-1 py-12 sm:py-16 lg:py-20">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          {/* Two-column layout — stacks on mobile, side-by-side on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            {/* Left: Calculator form */}
            <div className="animate-slide-in-left">
              <Calculator values={values} onValueChange={handleValueChange} />
            </div>

            {/* Right: Results */}
            <div className="animate-fade-in-up animation-delay-200">
              <Results results={results} inputs={values} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
