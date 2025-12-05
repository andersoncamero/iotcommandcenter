import type React from "react";

interface InputProps {
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  id?: string;
  type?: string;
  placeholder?: string
  required?: boolean
}

export const Input: React.FC<InputProps> = ({
  className,
  onChange,
  value,
  id,
  type,
  required,
  placeholder
}) => {
    return (
    <input
      id={id}
      type={type}
      className={`${className} flex h-10 w-full rounded-md border border-accent px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`}
      onChange={onChange}
      value={value}
      required={required}
      placeholder={placeholder}
    />
  );
};
