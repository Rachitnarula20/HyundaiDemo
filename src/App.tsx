import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturedVehicles from './components/FeaturedVehicles';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturedVehicles />

      </main>
      <Footer />
    </div>
  );
}

export default App;