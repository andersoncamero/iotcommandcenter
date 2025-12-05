import type React from "react";

interface AddControllerTemProps {
  children: React.ReactNode;
}

export const AddControllerTemplate: React.FC<AddControllerTemProps> = ({
  children,
}) => {
  return (
    <div className="p-4">
      <main className="space-y-6">{children}</main>
    </div>
  );
};
