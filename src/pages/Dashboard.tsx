import { useEffect, useState } from "react";
import { ControllersList } from "../components/organisms/ControllersList";
import { Header } from "../components/organisms/Header";
import { StatsCard } from "../components/organisms/StatsCards";
import { DashboardTemplate } from "../templates/DashboardTemplate";
import { Card } from "../components/atoms/Card";
import { useAuthContext } from "../contexts/AuthContext";
import type { Controler, LoraGateways } from "../entities/Controler";
import { Home, LayoutDashboard, Server } from "lucide-react";

const menuItems = [
  {
    linkTo: "/",
    label: "home",
    icon: Home,
  },
  {
    linkTo: "/dashboard",
    label: "dashboard",
    icon: LayoutDashboard,
  },
  {
    linkTo: "/controllers",
    label: "controllers",
    icon: Server,
  },
];

export const Dashboard = () => {
  const [controllers, setControllers] = useState([]);
  const [activeControllers, setActiveControllers] = useState(0);
  const [gateways, setGatewaysLora] = useState(0);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { user } = useAuthContext();

  useEffect(() => {
    if (!user?.user_id) {
      setLoading(false);
      return;
    }

    const loadControllers = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");

        const response = await fetch(
          import.meta.env.VITE_API_URL + "/controllers/" + user?.user_id,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          console.error("error data", errorData);
        }
        const data = await response.json();
        setControllers(data);
      } catch (error) {
        setError("Error al cargar los controladores");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadControllers();
  }, [user]);

  useEffect(() => {
    if (controllers.length <= 0) return;
    localStorage.setItem("controller", JSON.stringify(controllers));
    const statusController = async () => {
      for (let index = 0; index < controllers.length; index++) {
        const element = controllers[index] as Controler;
        const allLoraGateways = element.LoraGateways?.length;
        const onlineGatewaysCount = element.LoraGateways?.filter(
          (controller: LoraGateways) => controller.Status === "ONLINE"
        )?.length;
        setActiveControllers(onlineGatewaysCount);
        setGatewaysLora(allLoraGateways);
      }
    };
    statusController();
  }, [controllers]);

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
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <Header menuItems={menuItems} userName="name" />
      <DashboardTemplate>
        <section className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 flex items-center gap-2">
            Dashboard
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 border border-emerald-100">
              Monitoreo IoT
            </span>
          </h2>
        </section>

        <StatsCard
          totalController={controllers.length}
          totalApp={gateways}
          statusController={activeControllers}
        />

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          <div className="lg:col-span-2 h-full">
            <div className="h-full flex flex-col rounded-2xl bg-white/70 backdrop-blur-sm border border-white/30 shadow-[0_12px_30px_rgba(15,23,42,0.08)] p-5 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-sm font-semibold text-slate-800">
                    Análisis de Uso de Dispositivos
                  </h3>
                  <p className="text-xs text-slate-500">
                    Tráfico mensual estimado en los últimos 12 meses
                  </p>
                </div>
                <select className="text-xs border border-slate-200 rounded-lg px-2 py-1 bg-white text-slate-600">
                  <option>Último año</option>
                  <option>Últimos 6 meses</option>
                </select>
              </div>

              {controllers.length === 0 ? (
                <div className="mt-8 flex-1 flex items-center justify-center">
                  <p className="text-sm text-slate-500">
                    No hay información disponible.
                  </p>
                </div>
              ) : (
                <div className="mt-4 h-52 flex items-end gap-2 sm:gap-3">
                  {[
                    "Ene",
                    "Feb",
                    "Mar",
                    "Abr",
                    "May",
                    "Jun",
                    "Jul",
                    "Ago",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dic",
                  ].map((mes, index) => (
                    <div
                      key={mes}
                      className="flex-1 flex flex-col items-center gap-1"
                    >
                      <div
                        className="w-full rounded-t-md bg-[#0794d6] shadow-sm"
                        style={{
                          height: `${40 + (index % 6) * 8}px`,
                        }}
                      />
                      <span className="text-[10px] text-slate-500">{mes}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="h-full">
            <div className="h-full flex flex-col rounded-2xl bg-white/70 backdrop-blur-sm border border-white/30 shadow-[0_12px_30px_rgba(15,23,42,0.08)] p-5 sm:px-6 space-y-4">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-sm font-semibold text-slate-800">
                    Distribución de Dispositivos
                  </h3>
                  <p className="text-xs text-slate-500">
                    Resumen por tipo de dispositivo conectado
                  </p>
                </div>
                <span className="text-xs font-semibold text-slate-400">
                  {controllers.length} totales
                </span>
              </div>

              {controllers.length === 0 ? (
                <p className="text-sm text-slate-500 pt-4">
                  No hay información disponible.
                </p>
              ) : (
                <>
                  <dl className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <dt className="text-slate-500">Sensores</dt>
                      <dd className="font-semibold text-slate-800">120</dd>
                    </div>
                    <div>
                      <dt className="text-slate-500">Actuadores</dt>
                      <dd className="font-semibold text-slate-800">80</dd>
                    </div>
                    <div>
                      <dt className="text-slate-500">Gateways</dt>
                      <dd className="font-semibold text-slate-800">3</dd>
                    </div>
                    <div>
                      <dt className="text-slate-500">Controladores</dt>
                      <dd className="font-semibold text-slate-800">
                        {controllers.length}
                      </dd>
                    </div>
                  </dl>

                  <div className="space-y-3 pt-2">
                    {[
                      { label: "Sensores", value: 48, color: "bg-[#0794d6]" },
                      { label: "Actuadores", value: 32, color: "bg-[#10b981]" },
                      { label: "Gateways", value: 10, color: "bg-[#6366f1]" },
                      {
                        label: "Controladores",
                        value: 10,
                        color: "bg-[#f59e0b]",
                      },
                    ].map((item) => (
                      <div key={item.label} className="space-y-1">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-slate-600">{item.label}</span>
                          <span className="text-slate-500">{item.value}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                          <div
                            className={`h-full rounded-full ${item.color}`}
                            style={{ width: `${item.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        {controllers.length > 0 ? (
          <ControllersList mockControllers={controllers} />
        ) : (
          <Card
            typeCard="default"
            className="bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_12px_30px_rgba(11,152,223,0.178)] border border-white/20 px-4 py-4 space-y-3 max-h-[calc(100vh-120px)] overflow-y-auto"
          >
            <p className="mt-6 text-sm text-slate-500">
              No hay controladores registrados todavía.
            </p>
          </Card>
        )}
      </DashboardTemplate>
    </div>
  );
};
