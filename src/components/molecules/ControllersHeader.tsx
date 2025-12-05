import type React from "react";
import { Card } from "../atoms/Card";
import { Plus, Search } from "lucide-react";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";

interface ControllerHeaderProps {
  searchTerm?: string;
  onSearchChange?: (value: string) => void;
  onNew?: () => void;
}

export const ControllerHeader: React.FC<ControllerHeaderProps> = ({
  searchTerm,
  onSearchChange,
  onNew,
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-4">
      
      <Card typeCard="title" className="text-base sm:text-lg font-semibold">
        Lista de Controladores
      </Card>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Buscar controladores..."
            className="pl-9 w-full sm:w-48 md:w-64 bg-secondary/50 border-border/50"
            value={searchTerm}
            onChange={(e) => onSearchChange?.(e.target.value)}
          />
        </div>

        <Button onClick={onNew}  className="btn-primary px-4 sm:px-6 py-2.5 sm:py-3 whitespace-nowrap text-sm sm:text-base">
          <Plus className="w-4 h-4 mr-2 sm:mr-0" />
          <span className="sm:ml-0">Nuevo controlador</span>
        </Button>
      </div>
    </div>
  );
};
