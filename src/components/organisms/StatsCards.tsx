import { Cable, Cog, Radio } from "lucide-react";
import { Card } from "../atoms/Card";

interface StatsCardProps {
  totalController: number;
  statusController: number;
  totalApp: number;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  totalApp = 0,
  totalController = 0,
  statusController = 0
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
      <Card
        className="flex-1 min-w-[220px] relative p-4 sm:p-5 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/30 shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition-all duration-200 hover:border-accent hover:shadow-[0_18px_40px_rgba(11,152,223,0.12)]"
        typeCard="default"
      >
        <Card typeCard="content">
          <div className="flex items-center justify-between gap-3">
            <div className="p-3 rounded-xl bg-sky-50 border border-sky-100">
              <Radio className="w-5 h-5 text-accent" />
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-500">Total Controladores</p>
              <p className="text-xl sm:text-2xl font-semibold text-slate-900">
                {totalController}
              </p>
              <p className="text-[11px] text-emerald-600 mt-0.5">
                +12% desde el mes pasado
              </p>
            </div>
          </div>
        </Card>
      </Card>


      <Card
        className="flex-1 min-w-[220px] relative p-4 sm:p-5 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/30 shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition-all duration-200 hover:border-accent hover:shadow-[0_18px_40px_rgba(11,152,223,0.12)]"
        typeCard="default"
      >
        <Card typeCard="content">
          <div className="flex items-center justify-between gap-3">
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100">
              <Cable className="w-5 h-5 text-accent" />
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-500">Controladores Online</p>
              <p className="text-xl sm:text-2xl font-semibold text-slate-900">
                {statusController}
              </p>
              <p className="text-[11px] text-emerald-600 mt-0.5">
                50% Uptime
              </p>
            </div>
          </div>
        </Card>
      </Card>


      <Card
        className="flex-1 min-w-[220px] relative p-4 sm:p-5 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/30 shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition-all duration-200 hover:border-accent hover:shadow-[0_18px_40px_rgba(11,152,223,0.12)]"
        typeCard="default"
      >
        <Card typeCard="content">
          <div className="flex items-center justify-between gap-3">
            <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-100">
              <Cog className="w-5 h-5 text-accent" />
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-500">Gateways LoRa</p>
              <p className="text-xl sm:text-2xl font-semibold text-slate-900">
                {totalApp}
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5">
                6 aplicaciones
              </p>
            </div>
          </div>
        </Card>
      </Card>


      <Card
        className="flex-1 min-w-[220px] relative p-4 sm:p-5 rounded-2xl bg-white/70 backdrop-blur-sm border border-rose-100 shadow-[0_12px_30px_rgba(248,113,113,0.12)] transition-all duration-200 hover:border-rose-300 hover:shadow-[0_18px_40px_rgba(248,113,113,0.25)]"
        typeCard="default"
      >
        <Card typeCard="content">
          <div className="flex items-center justify-between gap-3">
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-100">
              <span className="block w-5 h-5 rounded-full bg-rose-500" />
            </div>
            <div className="text-right">
              <p className="text-xs text-rose-600 font-medium">
                Alertas activas
              </p>
              <p className="text-xl sm:text-2xl font-semibold text-rose-600">
                3
              </p>
              <p className="text-[11px] text-rose-500 mt-0.5">
                1 crítica
              </p>
            </div>
          </div>
        </Card>
      </Card>
    </div>
  );
};
