import type React from "react";

interface SignUpTemplateProps {
  children: React.ReactNode;
}

export const SignUpTemplate: React.FC<SignUpTemplateProps> = ({ children }) => {
  return (
    <div className="w-full flex items-center justify-center p-20">
      <main className="w-full max-w-md">{children}</main>
    </div>
  );
};
