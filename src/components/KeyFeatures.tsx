import React, { useState } from 'react';
import { features } from '../data/features';
import FeatureCard from './FeatureCard';

const KeyFeatures: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-hyundai-blue mb-4">Experience the Difference</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the innovative features that make Hyundai vehicles stand out,
            combining cutting-edge technology with exceptional design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.id} 
              feature={feature} 
              isActive={index === activeFeature}
              onClick={() => setActiveFeature(index)}
            />
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-hyundai-blue mb-4">
                  {features[activeFeature].title}
                </h3>
                <p className="text-gray-700 mb-6">
                  {features[activeFeature].description}
                </p>
                <div className="space-y-4">
                  {activeFeature === 0 && (
                    <>
                      <p className="flex items-start">
                        <span className="bg-hyundai-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0 mt-0.5">1</span>
                        <span>6 airbags as standard across most models for comprehensive protection</span>
                      </p>
                      <p className="flex items-start">
                        <span className="bg-hyundai-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0 mt-0.5">2</span>
                        <span>Forward Collision-Avoidance Assist to prevent or mitigate frontal crashes</span>
                      </p>
                      <p className="flex items-start">
                        <span className="bg-hyundai-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0 mt-0.5">3</span>
                        <span>Lane Keeping Assist and Lane Following Assist for highway safety</span>
                      </p>
                    </>
                  )}
                  {activeFeature === 1 && (
                    <>
                      <p className="flex items-start">
                        <span className="bg-hyundai-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0 mt-0.5">1</span>
                        <span>Turbocharged engines for enhanced power and responsive acceleration</span>
                      </p>
                      <p className="flex items-start">
                        <span className="bg-hyundai-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0 mt-0.5">2</span>
                        <span>Multiple drive modes to customize your driving experience</span>
                      </p>
                      <p className="flex items-start">
                        <span className="bg-hyundai-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0 mt-0.5">3</span>
                        <span>Advanced suspension for a smooth and comfortable ride</span>
                      </p>
                    </>
                  )}
                  {activeFeature === 2 && (
                    <>
                      <p className="flex items-start">
                        <span className="bg-hyundai-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0 mt-0.5">1</span>
                        <span>BlueLink connected car technology with over 60 smart features</span>
                      </p>
                      <p className="flex items-start">
                        <span className="bg-hyundai-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0 mt-0.5">2</span>
                        <span>10.25" touchscreen with Apple CarPlay and Android Auto connectivity</span>
                      </p>
                      <p className="flex items-start">
                        <span className="bg-hyundai-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0 mt-0.5">3</span>
                        <span>Bose premium sound system for an immersive audio experience</span>
                      </p>
                    </>
                  )}
                  {activeFeature === 3 && (
                    <>
                      <p className="flex items-start">
                        <span className="bg-hyundai-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0 mt-0.5">1</span>
                        <span>Ventilated and heated seats for year-round comfort</span>
                      </p>
                      <p className="flex items-start">
                        <span className="bg-hyundai-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0 mt-0.5">2</span>
                        <span>Panoramic sunroof to enhance the in-car experience</span>
                      </p>
                      <p className="flex items-start">
                        <span className="bg-hyundai-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0 mt-0.5">3</span>
                        <span>Premium materials and craftsmanship throughout the cabin</span>
                      </p>
                    </>
                  )}
                </div>
                <div className="mt-8">
                  <a href="#learn-more" className="btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="bg-hyundai-blue p-8 lg:p-12 flex items-center justify-center">
                <div className="text-center">
                  <img 
                    src={`https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`} 
                    alt="Hyundai Feature" 
                    className="rounded-lg shadow-lg max-w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;