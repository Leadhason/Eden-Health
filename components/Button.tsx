import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'dark';
  className?: string;
  onClick?: () => void;
  withArrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  withArrow = true
}) => {
  const baseStyles = "inline-flex items-center gap-2 px-8 py-3 text-sm tracking-wider font-semibold transition-all duration-300 ease-in-out border";
  
  const variants = {
    primary: "bg-black text-white border-black hover:bg-terra hover:border-terra",
    outline: "bg-transparent text-charcoal border-charcoal hover:bg-black hover:text-white",
    dark: "bg-white text-black border-white hover:bg-terra hover:text-white hover:border-terra"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
      {withArrow && <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />}
    </button>
  );
};

export default Button;