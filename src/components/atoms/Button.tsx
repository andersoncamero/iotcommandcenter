import type React from "react";


interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  role?: string;
  type?: "submit" | "reset" | "button" | undefined
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  type,
  disabled
}) => {
    return(
        <button
        onClick={onClick}
        className={`gap-2 ${className}`}
        type={type}
        disabled={disabled}
        >
            {children}
        </button>
    )
};
