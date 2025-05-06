import React from 'react';
import { vehicles } from '../data/vehicles';
import VehicleCard from './VehicleCard';

const FeaturedVehicles: React.FC = () => {
  return (
    <section id="models" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-hyundai-blue mb-4">Discover Our Models</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore Hyundai's range of innovative vehicles, designed with cutting-edge technology,
            premium comfort, and exceptional safety features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;