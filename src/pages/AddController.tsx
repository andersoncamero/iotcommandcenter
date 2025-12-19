import type React from "react";
import { ControllerForm } from "../components/organisms/ControllerForm";
import { Header } from "../components/organisms/Header";
import { AddControllerTemplate } from "../templates/AddControllerTemplate";
import { HardDrive, Home, LayoutDashboard, Server } from "lucide-react";

const menuItems = [
  {
    linkTo: "/",
    label: "Inicio",
    icon: Home,
  },
  {
    linkTo: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    linkTo: "/controllers",
    label: "controladores",
    icon: Server,
  },
  {
    linkTo: "/aplication",
    label: "Aplicaciones",
    icon: HardDrive,
  },
];

export const AddController: React.FC = () => {
  return (
    <div className="min-h-screen tech-grid relative w-screen left-1/2 -translate-x-1/2">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full blur-3xl animate-pulse-subtle" />
        <div
          className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full blur-3xl animate-pulse-subtle"
          style={{ animationDelay: "1.5s" }}
        />
      </div>
      <Header menuItems={menuItems} />
      <AddControllerTemplate>
        <ControllerForm />
      </AddControllerTemplate>
    </div>
  );
};
