import type React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  typeCard: "default" | "content" | "header" | "title" | "description";
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  typeCard,
}) => {
  const objectTypeCard = {
    default: "rounded-lg border shadow-sm",
    content: "p-2",
    header: "flex flex-col space-y-1.5 p-6",
    title: "text-2xl font-semibold leading-none",
    description: "text-sm"
  };

  return <div className={`${objectTypeCard[typeCard]} ${className}`}>{children}</div>;
};
