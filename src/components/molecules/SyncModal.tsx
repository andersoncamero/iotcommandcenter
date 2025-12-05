import type React from "react";
import { Card } from "../atoms/Card";
import { Lable } from "../atoms/Label";
import { Button } from "../atoms/Button";
import { RefreshCcw, X } from "lucide-react";
import { InputWithLabel } from "./InputWithLabel";
import { useState } from "react";

interface SyncModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSync: (addr: string) => void;
  loading: boolean;
}

export const SyncModal: React.FC<SyncModalProps> = ({
  isOpen,
  onClose,
  onSync,
  loading,
}) => {
  const [syncAddr, setSyncAddr] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSync(syncAddr);
  };

  if (!isOpen) return null;
  return (
    <Card
      typeCard="default"
      className="fixed inset-0 card-glass flex items-center justify-center z-50"
    >
      <Card
        typeCard="default"
        className="bg-white rounded-lg card-glass shadow-xl w-full max-w-md mx-4 animate-in fade-in slide-in-from-bottom-4"
      >
        <Card
          typeCard="title"
          className="flex items-center justify-between p-6"
        >
          <Lable className="font-semibold text-gray-800">
            Sincronizar Controlador
          </Lable>
          <Button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            disabled={loading}
          >
            <X className="w-5 h-5" />
          </Button>
        </Card>

        <form onSubmit={handleSubmit} className="p-6">
          <InputWithLabel
            classNameLable="block text-sm font-medium text-left"
            classNameInput="transition-colors"
            lable="Dirección IP del Controlador *"
            id="syncAddr"
            type="text"
            placeholder="192.168.1.100"
            value={syncAddr}
            onChange={(e) => setSyncAddr(e)}
            required
          />

          <div className="flex gap-3 mt-6">
            <Button
              type="button"
              onClick={onClose}
              className="flex-1 btn-secondary hover:bg-gray-100"
              disabled={loading}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="flex-1 btn-primary"
              disabled={loading}
            >
              <RefreshCcw
                className={`w-4 h-4 ${loading ? "animate-spin" : ""}`}
              />
              {loading ? "Sincronizando..." : "Sincronizar"}
            </Button>
          </div>
        </form>
      </Card>
    </Card>
  );
};
