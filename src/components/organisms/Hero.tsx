import type React from "react";
import { Wifi } from "lucide-react";
import { ButtonGroup } from "../molecules/ButtonGroup";

export const Hero: React.FC = () => {
  return (
    <section className="w-full">
      <div className="max-w-5xl mx-auto px-4 py-24 flex flex-col items-center justify-center text-center gap-4">
        <div className="flex items-center justify-center mb-4">
          <div className="p-4 rounded-2xl bg-white/10 shadow-[0_12px_30px_rgba(11,152,223,0.178)]">
            <Wifi className="w-16 h-16 text-accent" />
          </div>
        </div>

        <h1 className="font-serif font-extrabold text-[3.25rem] md:text-[4.5rem] leading-[1.02] m-0 text-[#0b2536]">
          Gestión de Dispositivos
          <span className="block text-[3.75rem] md:text-[5.5rem] text-accent">
            LoRaWAN
          </span>
        </h1>

        <p className="mt-3 max-w-3xl text-[1.05rem] text-[#415a6b]">
          Monitorea, configura y administra tu red de dispositivos IoT con una
          plataforma moderna y eficiente
        </p>

        <div className="flex gap-3 mt-6 justify-center pt-4">
          <ButtonGroup
            className="btn-primary"
            linkTo="/signup"
            label="Comenzar ahora"
          />
          <ButtonGroup
            className="btn-secondary hover:bg-gray-100"
            linkTo="/login"
            label="iniciar sesión"
          />
        </div>
      </div>
    </section>
  );
};
