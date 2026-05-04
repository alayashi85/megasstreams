'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface NeonButtonProps {
  children: React.ReactNode;
  variant?: 'purple' | 'red';
  onClick?: () => void;
  className?: string;
}

const NeonButton: React.FC<NeonButtonProps> = ({ 
  children, 
  variant = 'purple', 
  onClick,
  className = ''
}) => {
  const colorClass = variant === 'purple' 
    ? 'border-neon-purple text-neon-purple hover:bg-neon-purple/20 box-glow-purple' 
    : 'border-neon-red text-neon-red hover:bg-neon-red/20 box-glow-red';

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-8 py-3 rounded-full border-2 font-bold transition-all duration-300 ${colorClass} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default NeonButton;
