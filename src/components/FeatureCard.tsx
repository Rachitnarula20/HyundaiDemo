import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Feature } from '../types';

interface FeatureCardProps {
  feature: Feature;
  isActive: boolean;
  onClick: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, isActive, onClick }) => {
  // Dynamically get the icon component
  const IconComponent = LucideIcons[feature.icon as keyof typeof LucideIcons] || LucideIcons.Star;
  
  return (
    <div 
      className={`card p-6 cursor-pointer transition-all duration-300 ${
        isActive 
          ? 'bg-hyundai-blue text-white border-l-4 border-hyundai-red' 
          : 'hover:bg-gray-50'
      }`}
      onClick={onClick}
    >
      <IconComponent 
        className={`h-10 w-10 mb-4 ${
          isActive ? 'text-white' : 'text-hyundai-blue'
        }`} 
      />
      <h3 className={`text-xl font-bold mb-2 ${
        isActive ? 'text-white' : 'text-gray-800'
      }`}>
        {feature.title}
      </h3>
      <p className={`${
        isActive ? 'text-white/90' : 'text-gray-600'
      }`}>
        {feature.description}
      </p>
    </div>
  );
};

export default FeatureCard;