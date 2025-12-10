import type React from "react";
import { Card } from "../atoms/Card";
import { Lable } from "../atoms/Label";
import { Button } from "../atoms/Button";
import { Plus, RefreshCcw } from "lucide-react";
import { InputWithLabel } from "../molecules/InputWithLabel";
import { useState } from "react";
import { useNavigate } from "react-router";
import { SyncModal } from "../molecules/SyncModal";

export const ControllerForm: React.FC = () => {
  const navigate = useNavigate();

  const [formaData, setFormaData] = useState({
    controlleName: "",
    addr: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [syncModalOpen, setSyncModalOpen] = useState(false);
  const [syncLoading, setSyncLoading] = useState(false);
  const token = localStorage.getItem("token");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        import.meta.env.VITE_API_URL + "/controllers/add",
        {
          method: "POST",
          body: JSON.stringify(formaData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error al iniciar sesion", errorData);
        throw new Error("Error al iniciar sesion");
      }
      const data = await response.json();
      localStorage.setItem("token", data.token);
      console.log(data);
      await new Promise((res) => setTimeout(res, 300));

      navigate("/dashboard");
    } catch (error) {
      console.error("error al iniciar sesion", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSync = async (addr: string) => {
    setSyncLoading(true);
    
    try {
      const body = {"addr_chirpstack": addr}
      const response = await fetch(
        import.meta.env.VITE_API_URL + "/controllers/sync",
        {
          method: "PUT",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      alert(`Controlador sincronizado exitosamente con ${addr} ${data}`);
      setSyncModalOpen(false);
    } catch (error) {
      console.error("Error al sincronizar", error);
      alert("Error al sincronizar controlador");
    } finally {
      setSyncLoading(false);
    }
  };

  const handleChange = (key: string, value: string) => {
    setFormaData((prev) => ({ ...prev, [key]: value }));
  };
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <Card typeCard="default" className="w-full relative p-4 card-glass">
          <div className="flex items-center justify-between w-full gap-4">
            <Lable>Agregar Nuevo Controlador</Lable>
            <Button
              className="btn-primary"
              onClick={() => setSyncModalOpen(true)}
            >
              <RefreshCcw className="w-4 h-4" />
              sincronizar
            </Button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="w-full flex flex-row gap-4 p-4">
              <div className="flex-1">
                <InputWithLabel
                  classNameLable="block text-sm font-medium text-left"
                  classNameInput="transition-colors"
                  lable="Nomber del controlador *"
                  id="controlleName"
                  value={formaData.controlleName}
                  onChange={(e) => handleChange("controlleName", e)}
                />
              </div>
              <div className="flex-1">
                <InputWithLabel
                  classNameLable="block text-sm font-medium text-left"
                  classNameInput="transition-colors"
                  lable="Dirección IP *"
                  id="addr"
                  value={formaData.addr}
                  onChange={(e) => handleChange("addr", e)}
                />
              </div>
            </div>

            <div className="flex flex-row w-full gap-4 p-4">
              <div className="flex-1">
                <InputWithLabel
                  classNameLable="block text-sm font-medium text-left"
                  classNameInput="transition-colors"
                  lable="Descripcion"
                  id="description"
                  value={formaData.description}
                  onChange={(e) => handleChange("description", e)}
                  required={false}
                />
              </div>
            </div>

            <div className="w-full flex justify-end pt-0">
              <Button className="btn-primary" type="submit" disabled={loading}>
                <Plus className="w-4 h-4" />
                {loading ? "Agregando..." : "Agregar"}
              </Button>
            </div>
          </form>
        </Card>

        <SyncModal
          isOpen={syncModalOpen}
          onClose={() => setSyncModalOpen(false)}
          onSync={handleSync}
          loading={syncLoading}
          label="Sincronizar Controladores"
        />
      </div>
    </div>
  );
};
