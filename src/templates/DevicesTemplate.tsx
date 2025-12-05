import type React from "react";

interface DevicesTemProps {
  children: React.ReactNode;
}

export const DevicesTemplate: React.FC<DevicesTemProps> = ({
  children,
}) => {
  return (
    <div className="p-4">
      <main className="space-y-6">{children}</main>
    </div>
  );
};
