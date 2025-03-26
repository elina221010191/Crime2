import React from 'react';
//import "../Styles/button.css";
export const Button = ({ 
  children, 
  className = '', 
  onClick, 
  type = 'button', 
  disabled = false 
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        px-4 py-2 
        bg-blue-600 
        text-white 
        rounded-md 
        hover:bg-blue-700 
        transition-colors 
        duration-300 
        focus:outline-none 
        focus:ring-2 
        focus:ring-blue-500 
        focus:ring-opacity-50
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
    >
      {children}
    </button>
  );
};