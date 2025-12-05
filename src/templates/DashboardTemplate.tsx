import type React from "react";

interface DashboardTemProps {
  children: React.ReactNode;
}

export const DashboardTemplate: React.FC<DashboardTemProps> = ({
  children,
}) => {
  return (
    <div className="p-4">
      <main className="space-y-6">{children}</main>
    </div>
  );
};
