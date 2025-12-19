import type { Controller } from "../entities/Controller";
import type { ControllerServices } from "../services/ControllerServices";

export const GetControllerById = async (
  controllerId: string,
  controllerService: ControllerServices
): Promise<Controller | null> => {
  if (!controllerId.trim()) return null;
  return await controllerService.GetControllerById(controllerId)
};
