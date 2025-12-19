import type React from "react";
import { Card } from "../atoms/Card";
import { Plus, RefreshCcw } from "lucide-react";
import { Button } from "../atoms/Button";

interface DevicesHeaderProps {
  onNew?: () => void;
  onSync?: () => void;
}

export const LorawanAppHeader: React.FC<DevicesHeaderProps> = ({ onNew, onSync }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-4">
      <Card typeCard="title" className="text-base sm:text-lg font-semibold">
        Lista de Aplicaciones
      </Card>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
        <Button
          onClick={onSync}
          className="btn-primary px-4 sm:px-6 py-2.5 sm:py-3 whitespace-nowrap text-sm sm:text-base"
        >
          <RefreshCcw className="w-4 h-4" />
          <span className="sm:ml-0">Sincronizar Aplicaciones</span>
        </Button>
        <Button
          onClick={onNew}
          className="btn-primary px-4 sm:px-6 py-2.5 sm:py-3 whitespace-nowrap text-sm sm:text-base"
        >
          <Plus className="w-4 h-4 mr-2 sm:mr-0" />
          <span className="sm:ml-0">Nueva Aplicacion</span>
        </Button>
      </div>
    </div>
  );
};
