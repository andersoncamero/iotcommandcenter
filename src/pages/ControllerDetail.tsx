/* eslint-disable react-hooks/exhaustive-deps */
import type React from "react";
import { Header } from "../components/organisms/Header";
import {
  AppWindowMac,
  HardDrive,
  Home,
  LayoutDashboard,
  Network,
  RefreshCcw,
  Server,
  Wifi,
} from "lucide-react";
import { useLocation } from "react-router";
import { ControllerTemplate } from "../templates/ControllerTemplate";
import { Card } from "../components/atoms/Card";
import { useControllerById } from "../hooks/useControllerById";
import { useEffect } from "react";
import { Lable } from "../components/atoms/Label";
import { Button } from "../components/atoms/Button";
import { UseSyncApp } from "../hooks/useSyncApp";
import { UseLorawanAppByConId } from "../hooks/useLorawanAppByConID";

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
    linkTo: "/aplication",
    label: "Aplicaciones",
    icon: HardDrive,
  },
];

export const ControllerDetail: React.FC = () => {
  const location = useLocation();
  const controllerID = location.state?.controllerID;
  const { controller, handleGetControllerById } =
    useControllerById(controllerID);

  const { handlerSyncApp } = UseSyncApp(controllerID);
  const { handlerLorawanAppByConId, lorawanApplications } =
    UseLorawanAppByConId(controllerID);

  useEffect(() => {
    handleGetControllerById();
    handlerLorawanAppByConId();
  }, [controllerID]);

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
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 w-full">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 flex items-center gap-2">
              Controlador
              <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 border border-emerald-100">
                {controllerID}
              </span>
            </h2>

            <Button
              className="btn-primary px-4 sm:px-6 py-2.5 sm:py-3 whitespace-nowrap text-sm sm:text-base"
              onClick={() => handlerSyncApp()}
            >
              <RefreshCcw className="w-4 h-4" />
              <span>Sincronizar</span>
            </Button>
          </div>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="card-glass">
            <Card typeCard="header" className="pb-2">
              <Card
                typeCard="title"
                className="text-sm font-medium flex items-center gap-2"
              >
                <Network className="h-4 w-4 text-primary"></Network>
                <Lable>Conexión</Lable>
              </Card>
            </Card>
            <Card
              typeCard="content"
              className="flex flex-col items-start pl-5 pb-4 gap-2"
            >
              <div>
                <p className="text-sm text-start">Direccion IP </p>
                <p className="text-start">{controller?.IP}</p>
              </div>
              <div>
                <p className="text-sm text-start">User ChirpStack Id</p>
                <p className="text-start">{controller?.UserChirpStackID}</p>
              </div>
            </Card>
          </div>

          <div className="card-glass">
            <Card typeCard="header" className="pb-2">
              <Card
                typeCard="title"
                className="text-sm font-medium flex items-center gap-2"
              >
                <AppWindowMac className="h-4 w-4 text-primary"></AppWindowMac>
                <Lable>
                  LorawanApplication{" "}
                  <span className="text-start">
                    ({lorawanApplications?.length})
                  </span>{" "}
                </Lable>
              </Card>
            </Card>
            <Card
              typeCard="content"
              className="flex flex-col items-start pl-5 pb-4 gap-2"
            >
              <div>
                {lorawanApplications?.map((lorawanApplication) => (
                  <div key={lorawanApplication.ID}>
                    <p className="text-sm text-start">
                      Id:{" "}
                      <span className="text-start">
                        {lorawanApplication.ID}
                      </span>{" "}
                    </p>
                    <p className="text-sm text-start">
                      nombre:{" "}
                      <span className="text-start">
                        {lorawanApplication.Name}
                      </span>{" "}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="card-glass">
            <Card typeCard="header" className="pb-2">
              <Card
                typeCard="title"
                className="text-sm font-medium flex items-center gap-2"
              >
                <Network className="h-4 w-4 text-primary"></Network>
                <Lable>Conexión</Lable>
              </Card>
            </Card>
            <Card
              typeCard="content"
              className="flex flex-col items-start pl-5 pb-4 gap-2"
            >
              <div>
                <p className="text-sm text-start">Direccion IP </p>
                <p className="text-start">{controller?.IP}</p>
              </div>
              <div>
                <p className="text-sm text-start">User ChirpStack Id</p>
                <p className="text-start">{controller?.UserChirpStackID}</p>
              </div>
            </Card>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <Card typeCard="header" className="pb-3">
              <Card
                typeCard="title"
                className="text-sm font-medium flex items-center gap-2"
              >
                <Wifi className="h-4 w-4 text-primary" />
                LoRa Gateways ({controller?.LoraGateways?.length})
              </Card>
            </Card>
            <Card typeCard="content">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {controller?.LoraGateways?.map((loraGateway) => (
                  <div key={loraGateway.ID}>
                    <Card
                      typeCard="content"
                      className="p-4 space-y-2 card-glass border border-zinc-300"
                    >
                      <div className="space-y-1 text-sm text-start">
                        <p>
                          <span className="font-medium">Name:</span>{" "}
                          <span className="break-all">{loraGateway.Name}</span>
                        </p>

                        <p>
                          <span className="font-medium">Lora Gateway ID:</span>{" "}
                          <span className="break-all">{loraGateway.ID}</span>
                        </p>

                        <p>
                          <span className="font-medium">Estado:</span>{" "}
                          <span
                            className={`font-semibold ${
                              loraGateway.Status === "ONLINE"
                                ? "text-emerald-600"
                                : "text-red-500"
                            }`}
                          >
                            {loraGateway.Status}
                          </span>
                        </p>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </ControllerTemplate>
    </div>
  );
};
