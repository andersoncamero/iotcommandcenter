import type React from "react";
import { HomeTemplate } from "../templates/HomeTemplate";
import { Hero } from "../components/organisms/Hero";
import { Features } from "../components/organisms/Features";
import { Header } from "../components/organisms/Header";
import { Home, LayoutDashboard, ScrollText } from "lucide-react";

const menuItems = [
  {
    linkTo: "/",
    label: "Home",
    icon: Home,
  },
  {
    linkTo: "/dashboard",
    label: "dashboard",
    icon: LayoutDashboard,
  },
  {
    linkTo: "/documentation",
    label: "Documentation",
    icon: ScrollText,
  },
];

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen tech-grid relative w-screen left-1/2 -translate-x-1/2">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full blur-3xl animate-pulse-subtle" />
        <div
          className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full blur-3xl animate-pulse-subtle"
          style={{ animationDelay: "1.5s" }}
        />
        <div className="px-10 absolute top-25" id="earth"></div>
      </div>
      <div className="relative z-10">
        <HomeTemplate>
          <Header menuItems={menuItems} userName=""/>
          <Hero />
          <Features />
        </HomeTemplate>
      </div>
    </div>
  );
};
