import React from 'react';
export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/src/assets/logo.jpeg"
        alt="Ready2Go Overseas Consultancy"
        className="h-12 w-auto object-contain"
      />
    </div>
  );
};
