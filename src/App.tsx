// App.tsx (현재 형태)
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Metrics from "./components/Metrics";
import KoreanSection from "./components/KoreanSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section with white background */}
        <Hero />

        {/* Core Services Section */}
        <div className="py-8 bg-gray-100">
          <Services />
        </div>

        {/* Visual Portfolio Section */}
        <div className="py-8 bg-white">
          <Portfolio />
        </div>

        {/* Performance Metrics Section */}
        <Metrics />

        {/* Korean Section */}
        <KoreanSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
