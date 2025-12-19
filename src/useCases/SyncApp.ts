import type { LorawanApplication } from "../entities/Devices";
import type { LorawanAppService } from "../services/LorawanAppServices";

export const SyncApp = async (
  constrollerID: string,
  lorawanAppServices: LorawanAppService
): Promise<Array<LorawanApplication> | []> => {
  if (!constrollerID.trim()) return [];
  return await lorawanAppServices.SyncApp(constrollerID);
};
