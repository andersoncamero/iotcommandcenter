import { LoginTemplate } from "../templates/LoginTemplate";
import { Card } from "../components/atoms/Card";
import { Home, LayoutDashboard, ScrollText, Wifi } from "lucide-react";
import { SignInForm } from "../components/organisms/SignInForm";
import { Header } from "../components/organisms/Header";


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

export const Login = () => {
  return (
    <div className="min-h-screen tech-grid relative overflow-hidden w-screen left-1/2 -translate-x-1/2">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-subtle" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-subtle"
          style={{ animationDelay: "1.5s" }}
        />
      </div>
      <Header menuItems={menuItems} userName=""/>
      <LoginTemplate>
        <Card
          className="w-full max-w-md relative p-6 sm:p-8 card-glass transition-all duration-200 hover:border-accent hover:shadow-[0_18px_40px_rgba(11,152,223,0.12)]"
          typeCard="default"
        >
          <Card className="space-y-3 text-center" typeCard="header">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-lg bg-primary/10 signal-glow">
                <Wifi className="w-8 h-8 text-accent" />
              </div>
            </div>
            <h1 className="text-2xl font-semibold leading-none tracking-tight">
              Bienvenido de nuevo
            </h1>
          </Card>
          <div className="p-6 sm:p-8">
            <SignInForm />
          </div>
        </Card>
      </LoginTemplate>
    </div>
  );
};
