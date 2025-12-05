import type React from "react";

interface ControllerTemProps {
  children: React.ReactNode;
}

export const ControllerTemplate: React.FC<ControllerTemProps> = ({
  children,
}) => {
  return (
    <div className="p-4">
      <main className="space-y-6">{children}</main>
    </div>
  );
};
