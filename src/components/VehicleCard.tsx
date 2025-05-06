import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Vehicle } from '../types';

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  return (
    <div className="card overflow-hidden group">
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img
          src={vehicle.image}
          alt={`Hyundai ${vehicle.name}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-hyundai-blue text-white text-xs font-medium px-2 py-1 rounded">
          {vehicle.type}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-hyundai-blue mb-1">{vehicle.name}</h3>
        <p className="text-hyundai-blue-dark font-medium mb-4">
          Starting at {vehicle.price}
        </p>
        <div className="space-y-2 mb-6">
          {vehicle.features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <Check className="h-5 w-5 text-hyundai-blue shrink-0 mt-0.5 mr-2" />
              <p className="text-sm text-gray-700">{feature}</p>
            </div>
          ))}
        </div>
        <div className="flex space-x-3">
          <a
            href={`#explore-${vehicle.name.toLowerCase()}`}
            className="btn-secondary text-sm px-4 py-2"
          >
            Explore
          </a>
          <a
            href="#book-now"
            className="btn-primary text-sm px-4 py-2"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;