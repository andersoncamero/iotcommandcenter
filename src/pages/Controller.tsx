import type React from "react";
import { Card } from "../components/atoms/Card";
import { Button } from "../components/atoms/Button";
import { ControllerHeader } from "../components/molecules/ControllersHeader";
import { Header } from "../components/organisms/Header";
import { Home, LayoutDashboard, Server, HardDrive } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import type { Controler } from "../entities/Controler";
import { ControllerTemplate } from "../templates/ControllerTemplate";

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
    label: "Controladores",
    icon: Server,
  },
  {
    linkTo: "/Devices",
    label: "Dispositivos",
    icon: HardDrive,
  },
];

export const Controller: React.FC = () => {
  const navigate = useNavigate();
  const [controllers, setControllers] = useState<Array<Controler>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadControllers();
  }, []);

  const loadControllers = async () => {
    try {
      setLoading(true);
      const dataString = localStorage.getItem("controllers");
      if (dataString) {
        const dataController = JSON.parse(dataString);
        setControllers(dataController);
      } else {
        setControllers([]);
      }
    } catch (error) {
      setError("Error al cargar los controladores");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const addControler = () => {
    navigate("/add-controller");
  };

  if (loading) {
    return <div>Cargando controladores...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="min-h-screen tech-grid relative w-screen left-1/2 -translate-x-1/2">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full blur-3xl animate-pulse-subtle" />
        <div
          className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full blur-3xl animate-pulse-subtle"
          style={{ animationDelay: "1.5s" }}
        />
      </div>
      <Header menuItems={menuItems} userName="" />
      <ControllerTemplate>
          <section className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 flex items-center gap-2">
              Controladores
              <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 border border-emerald-100">
                Monitoreo IoT
              </span>
            </h2>
          </section>
          <Card
            typeCard="default"
            className="w-full relative p-2 sm:p-4 md:p-6 card-glass"
          >
            <ControllerHeader onNew={addControler} />
            <div className="mt-6 gap-4 sm:gap-5">
              {controllers.length > 0 ? (
                <div className="flex flex-col sm:flex-row md:flex-row flex-wrap w-full gap-4">
                  {controllers.map((controller) => (
                    <Card
                      key={controller.ID}
                      typeCard="default"
                      className="relative flex-1 min-w-[280px] max-w-[400px] p-4 sm:p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/40 shadow-[0_10px_26px_rgba(15,23,42,0.06)] hover:border-accent/80 hover:shadow-[0_18px_40px_rgba(11,152,223,0.16)] transition-all duration-200"
                    >
                      <Card typeCard="content" className="space-y-3">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-xs uppercase tracking-wide text-slate-400">
                              Controlador
                            </p>
                            <h2 className="text-base sm:text-lg font-semibold text-slate-900">
                              {controller.Name}
                            </h2>
                            <p className="text-[11px] text-slate-500 mt-1">
                              ID:{" "}
                              <span className="font-mono">{controller.ID}</span>
                            </p>
                          </div>
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[11px] border`}
                          >
                            {}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-3 text-xs sm:text-sm">
                          <div>
                            <p className="text-slate-500 text-[11px]">
                              Dirección IP
                            </p>
                            <p className="font-mono text-slate-800 text-xs bg-slate-50 border border-slate-100 rounded-md px-2 py-1 inline-block mt-0.5">
                              {controller.IP}
                            </p>
                          </div>
                          <div>
                            <p className="text-slate-500 text-[11px]">
                              Gateways
                            </p>
                            <p className="font-semibold text-slate-800 mt-0.5">
                              {controller.LoraGateways.length}
                            </p>
                          </div>
                          <div>
                            <p className="text-slate-500 text-[11px]">
                              Aplicaciones
                            </p>
                            <p className="font-semibold text-slate-800 mt-0.5">
                              {controller.Application}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <p className="text-[11px] text-slate-400">
                            Última sincronización hace 5 min
                          </p>
                          <div className="flex gap-2">
                            <Button className="text-xs px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">
                              Ver detalle
                            </Button>
                            <Button className="text-xs px-3 py-1.5 rounded-lg bg-[#0794d6] text-white hover:bg-[#0577bb] transition-colors">
                              Controlar
                            </Button>
                          </div>
                        </div>
                      </Card>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card
                  typeCard="default"
                  className="bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_12px_30px_rgba(11,152,223,0.178)] border border-white/20 px-4 py-4 space-y-3 max-h-[calc(100vh-120px)] overflow-y-auto w-full"
                >
                  <p className="mt-6 text-sm text-slate-500">
                    No hay controladores registrados.
                  </p>
                </Card>
              )}
            </div>
          </Card>
      </ControllerTemplate>
    </div>
  );
};
