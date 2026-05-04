import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-neon-purple/50 transition-all group">
      <div className="w-14 h-14 rounded-xl bg-neon-purple/20 flex items-center justify-center text-neon-purple mb-6 group-hover:scale-110 transition-transform">
        <Icon size={30} />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      {description && <p className="text-gray-400">{description}</p>}
    </div>
  );
};

export default FeatureCard;
