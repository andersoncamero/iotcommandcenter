import type React from "react";
import { Card } from "../atoms/Card";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { Table } from "../atoms/Table";
import { Radio } from "lucide-react";
import type { Controller } from "../../entities/Controller";

interface ControllersListpProps{
  mockControllers: Array<Controller>
}

export const ControllersList: React.FC<ControllersListpProps> = ({mockControllers}) => {
  return (
    <section className="space-y-4">
      <Card
        typeCard="default"
        className="w-full relative rounded-2xl bg-white/70 backdrop-blur-sm border border-white/30 shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
      >
        <div className="flex items-center justify-between gap-3 p-2">
          <div className="flex items-center gap-2">
            <Radio className="w-5 h-5 text-accent" />
            <div>
              <h3 className="text-sm font-semibold text-slate-800">
                Estado de Controladores
              </h3>
              <p className="text-xs text-slate-500">
                Resumen de conectividad y control en tiempo real
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Input
              className="hidden sm:block text-xs border border-slate-200 rounded-lg px-3 py-1.5 bg-white/70 text-slate-600 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-accent/60"
              placeholder="Buscar controladores..."
              onChange={() => {}}
            />
            <Button className="text-xs px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">
              Ver todos
            </Button>
            <Button className="text-xs px-3 py-1.5 rounded-lg bg-[#0794d6] text-white hover:bg-[#0577bb] transition-colors">
              + Nuevo Controlador
            </Button>
          </div>
        </div>

        <Card typeCard="content" className="p-0">
          <div className="overflow-x-auto">
            <Table
              typeTable="default"
              className="min-w-full text-xs sm:text-sm"
            >
              <Table typeTable="header">
                <Table
                  typeTable="row"
                  className="text-left text-[11px] sm:text-xs uppercase tracking-wide text-slate-400 border-b border-slate-100"
                >
                  <Table
                    typeTable="head"
                    className="py-3 pl-4 sm:pl-6 pr-2 font-medium"
                  >
                    Controlador
                  </Table>
                  <Table typeTable="head" className="px-2 font-medium">
                    IP
                  </Table>
                  <Table
                    typeTable="head"
                    className="px-2 font-medium text-center"
                  >
                    Gateways
                  </Table>
                  <Table
                    typeTable="head"
                    className="px-2 font-medium text-center"
                  >
                    Estado
                  </Table>
                </Table>
              </Table>
              <Table typeTable="body" className="divide-y divide-slate-100">
                {mockControllers.map((controller) => (
                  <Table
                    key={controller.ID}
                    typeTable="row"
                    className="hover:bg-slate-50/60"
                  >
                    <Table typeTable="cell" className="py-3 pl-4 sm:pl-6 pr-2">
                      <div className="flex flex-col">
                        <span className="font-medium text-slate-800">
                          {controller.Name}
                        </span>
                        <span className="text-[11px] text-slate-500">
                          ID: {controller.ID}
                        </span>
                      </div>
                    </Table>
                    <Table typeTable="cell" className="px-2">
                      <span className="inline-flex items-center rounded-md bg-slate-50 px-2 py-0.5 text-[11px] font-mono text-slate-700 border border-slate-100">
                        {controller.IP}
                      </span>
                    </Table>
                    <Table typeTable="cell" className="px-2 text-center">
                      {controller.LoraGateways.length}
                    </Table>
                    <Table typeTable="cell" className="px-2 text-center">
                      <span
                        className={`inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-[11px] border`}
                      >
                        
                      </span>
                    </Table>
                  </Table>
                ))}
              </Table>
            </Table>
          </div>
        </Card>
      </Card>
    </section>
  );
};
