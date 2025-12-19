import type { Controller } from "../entities/Controller";
import type { ControllerServices } from "../services/ControllerServices";

export const GetControllerByUserId = async (
  userId: string,
  controllerService: ControllerServices
): Promise<Array<Controller> | []> => {
  if (!userId.trim()) return [];
  return await controllerService.GetControllerByUserId(userId)
};
