import type React from "react";

interface LoginTemplateProps {
  children: React.ReactNode;
}

export const LoginTemplate: React.FC<LoginTemplateProps> = ({ children }) => {
  return (
    <div className="w-full flex items-center justify-center p-5">
      <main className="w-full max-w-md">{children}</main>
    </div>
  );
};
