import React from 'react';
import logoImage from '../assets/logo.jpeg';

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoImage}
        alt="Ready2Go Overseas Consultancy"
        className="h-12 w-auto object-contain"
      />
    </div>
  );
};
