import { useState } from "react";
import type { Controller } from "../entities/Controller";
import { ControllerServices } from "../services/ControllerServices";
import { GetControllerByUserId } from "../useCases/GetControllerByUserId";

export interface ControllerByUserIdHookInterface {
  handleGetControllerByUserId: () => void;
  controllers: Array<Controller>;
  loading: boolean;
  error: string | null;
}

export const useControllerByUserId = (
  userId: string | null
): ControllerByUserIdHookInterface => {
  const [controllers, setControllers] = useState<Array<Controller> | []>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const controllerService = new ControllerServices();

  const handleGetControllerByUserId = async (): Promise<void> => {
    if (!userId || !userId.trim()) return;

    try {
      setLoading(true);
      setError(null);

      const data = await GetControllerByUserId(userId, controllerService);
      setControllers(data);
    } catch {
      setError("error loading controller");
    } finally {
      setLoading(false);
    }
  };

  return {
    handleGetControllerByUserId,
    controllers,
    loading,
    error,
  };
};
