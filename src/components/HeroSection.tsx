import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '../data/vehicles';
import { SlideProps } from '../types';
import TestDriveModal from './TestDriveModal'; // 🔁 Adjust path if needed

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isTestDriveOpen, setIsTestDriveOpen] = useState(false); // 👈 Modal state

  const goToNextSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const goToPrevSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, isTransitioning]);

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        {/* Slides */}
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="container-custom h-full flex flex-col justify-center">
              <div className="text-white mt-16 md:mt-0 max-w-lg">
                <h1 className="font-bold mb-2 tracking-wide text-3xl md:text-5xl">{slide.model}</h1>
                <p className="text-xl md:text-2xl mb-8 text-white/90">{slide.tagline}</p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <button
                    onClick={() => setIsTestDriveOpen(true)}
                    className="btn-primary cursor-pointer"
                  >
                    Book a Test Drive
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <div className="absolute bottom-8 right-8 flex space-x-2 z-20">
          <button
            onClick={goToPrevSlide}
            className="bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goToNextSlide}
            className="bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white w-6' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Test Drive Modal */}
      <TestDriveModal isOpen={isTestDriveOpen} onClose={() => setIsTestDriveOpen(false)} />
    </>
  );
};

export default HeroSection;
