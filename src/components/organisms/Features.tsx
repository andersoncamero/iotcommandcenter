import type React from "react";
import { Card } from "../atoms/Card";
import { Radio, Shield, Wifi, Zap } from "lucide-react";

export const Features: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <Card
          className="p-4 card-glass transition-all duration-200 hover:border-accent hover:shadow-[0_18px_40px_rgba(11,152,223,0.12)]"
          typeCard="default"
        >
          <Card className="pt-6 text-center space-y-3" typeCard="content">
            <div className="flex justify-center">
              <div className="p-3 rounded-xl bg-blue-50">
                <Radio className="w-8 h-8 text-accent" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-[#0b2536]">Monitoreo en Tiempo Real</h3>
            <p className="text-sm text-[#415a6b]">
              Visualiza el estado de tus dispositivos al instante
            </p>
          </Card>
        </Card>

        <Card
          className="p-4 card-glass transition-all duration-200 hover:border-accent hover:shadow-[0_18px_40px_rgba(11,152,223,0.12)]"
          typeCard="default"
        >
          <Card className="pt-6 text-center space-y-3" typeCard="content">
            <div className="flex justify-center">
              <div className="p-3 rounded-xl bg-blue-50">
                <Wifi className="w-8 h-8 text-accent" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-[#0b2536]">Gestión Simplificada</h3>
            <p className="text-sm text-[#415a6b]">
              Agrega y configura controladores fácilmente
            </p>
          </Card>
        </Card>

        <Card
          className="p-4 card-glass transition-all duration-200 hover:border-accent hover:shadow-[0_18px_40px_rgba(11,152,223,0.12)]"
          typeCard="default"
        >
          <Card className="pt-6 text-center space-y-3" typeCard="content">
            <div className="flex justify-center">
              <div className="p-3 rounded-xl bg-blue-50">
                <Shield className="w-8 h-8 text-accent" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-[#0b2536]">Seguridad Avanzada</h3>
            <p className="text-sm text-[#415a6b]">
              Protección de datos y autenticación robusta
            </p>
          </Card>
        </Card>

        <Card
          className="p-4 card-glass transition-all duration-200 hover:border-accent hover:shadow-[0_18px_40px_rgba(11,152,223,0.12)]"
          typeCard="default"
        >
          <Card className="pt-6 text-center space-y-3" typeCard="content">
            <div className="flex justify-center">
              <div className="p-3 rounded-xl bg-blue-50">
                <Zap className="w-8 h-8 text-accent" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-[#0b2536]">Alto Rendimiento</h3>
            <p className="text-sm text-[#415a6b]">
              Optimizado para redes de gran escala
            </p>
          </Card>
        </Card>
      </div>
    </section>
  );
};
