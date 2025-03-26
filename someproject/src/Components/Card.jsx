import React from 'react';

// Card component
export const Card = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-md p-4 border border-gray-200 ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
};

// CardHeader component
export const CardHeader = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`mb-3 border-b border-gray-100 pb-2 ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
};

// CardTitle component
export const CardTitle = ({ children, className = '', ...props }) => {
  return (
    <h3 
      className={`text-lg font-semibold text-gray-800 ${className}`} 
      {...props}
    >
      {children}
    </h3>
  );
};

// CardContent component
export const CardContent = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`text-gray-600 ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
};