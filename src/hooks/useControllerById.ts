import { useState } from "react";
import type { Controller } from "../entities/Controller";
import { ControllerServices } from "../services/ControllerServices";
import { GetControllerById } from "../useCases/GetControllerById";

export interface ControllerByIdHookInterface {
  handleGetControllerById: () => void;
  controller: Controller;
  loading: boolean;
  error: string | null;
}

export const useControllerById = (
  controllerId: string
): ControllerByIdHookInterface => {
  const [controller, setController] = useState<Controller | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const controllerService = new ControllerServices();

  const handleGetControllerById = async (): Promise<void> => {
    if (!controllerId.trim()) return;

    try {
      setLoading(true);
      setError(null);

      const data = await GetControllerById(controllerId, controllerService);
      setController(data);
      
    } catch (error) {
      console.error("error loading controller: ", error);
      setError("error loading controller");
    } finally {
      setLoading(false);
    }
  };

  return {
    handleGetControllerById,
    controller: controller as Controller,
    loading,
    error,
  };
};
