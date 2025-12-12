import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-12 w-12" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-label="African Tech Street Logo"
    >
      {/* Green Circle Background */}
      <circle cx="50" cy="50" r="50" fill="#1E5E3A" />
      
      {/* Abstract Africa Map Outline (Simplified) */}
      <path 
        d="M25 30 C 25 20, 40 10, 55 15 C 70 15, 80 25, 85 45 C 85 60, 70 75, 60 90 L 50 90 C 40 80, 40 60, 40 50 C 30 50, 20 40, 25 30 Z" 
        fill="white" 
        opacity="0.95"
      />
      
      {/* Orange ATS Text overlay */}
      <text 
        x="50%" 
        y="55%" 
        dominantBaseline="middle" 
        textAnchor="middle" 
        fill="#FF6B00" 
        fontSize="30" 
        fontWeight="900" 
        fontFamily="sans-serif"
        style={{ filter: 'drop-shadow(1px 1px 1px rgba(0,0,0,0.2))' }}
      >
        ATS
      </text>
    </svg>
  );
};
