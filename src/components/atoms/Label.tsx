import type React from "react";

interface LableProps {
  children: React.ReactNode;
  className?: string;
  htmlFor?: string;
}

export const Lable: React.FC<LableProps> = ({
  children,
  className,
  htmlFor,
}) => {
  return (
    <label htmlFor={htmlFor} className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}>
      {children}
    </label>
  );
};
