import type React from "react";

interface HomeTemplateProps {
  children: React.ReactNode;
}

export const HomeTemplate: React.FC<HomeTemplateProps> = ({ children }) => {
  return (
    <div className="">
      <main>{children}</main>
    </div>
  );
};
