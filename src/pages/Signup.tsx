import { Wifi } from "lucide-react";
import { Card } from "../components/atoms/Card";
import { SignUpFrom } from "../components/organisms/SignUpForm";
import { SignUpTemplate } from "../templates/SignupTemplate";

export const Signup = () => {
  return (
   <div className="min-h-screen tech-grid relative overflow-hidden w-screen left-1/2 -translate-x-1/2">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-subtle" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-subtle"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <SignUpTemplate>
        <Card
          className="w-full max-w-md relative p-4 card-glass transition-all duration-200 hover:border-accent hover:shadow-[0_18px_40px_rgba(11,152,223,0.12)]"
          typeCard="default"
        >
          <Card className="space-y-1 text-center" typeCard="header">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-lg bg-primary/10 signal-glow">
                <Wifi className="w-8 h-8 text-accent" />
              </div>
            </div>
            <h1 className="text-2xl font-semibold leading-none tracking-tight">
              Crear cuenta
            </h1>
            <p className="text-sm text-muted-foreground">
              Registra tu cuenta para gestionar dispositivos LoRaWAN
            </p>
          </Card>
          <SignUpFrom />  
        </Card>
      </SignUpTemplate>
    </div>
  );
};
