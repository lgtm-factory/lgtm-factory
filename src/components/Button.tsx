// components/Button.tsx
import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  // 必要に応じて他のプロパティを追加できます
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`px-4 py-2 border border-gray-300 rounded-lg cursor-pointer bg-white text-black hover:bg-gray-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
