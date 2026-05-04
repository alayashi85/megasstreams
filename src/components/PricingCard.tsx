import React from 'react';
import NeonButton from './NeonButton';
import { Check } from 'lucide-react';

interface PricingCardProps {
  duration: string;
  price: string;
  currency: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  duration, 
  price, 
  currency,
  features, 
  isPopular = false,
  buttonText
}) => {
  return (
    <div className={`relative p-8 rounded-3xl bg-white/5 border ${isPopular ? 'border-neon-red scale-105 z-10' : 'border-white/10'} flex flex-col`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neon-red text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
          Most Popular
        </div>
      )}
      
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-400 mb-2">{duration}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-xl text-gray-400 font-medium">{currency}</span>
        </div>
      </div>
      
      <ul className="space-y-4 mb-10 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3 rtl:space-x-reverse text-sm text-gray-300">
            <Check size={18} className="text-neon-purple flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <NeonButton variant={isPopular ? 'red' : 'purple'} className="w-full">
        {buttonText}
      </NeonButton>
    </div>
  );
};

export default PricingCard;
