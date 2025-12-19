import { useState } from "react";

import { LorawanAppService } from "../services/LorawanAppServices";
import type { LorawanApplication } from "../entities/Devices";
import { GetLorawanAppByControllerId } from "../useCases/GetLorawanAppByConId";

export interface LorawanAppByConIdHookInterface {
  handlerLorawanAppByConId: () => void;
  lorawanApplications: Array<LorawanApplication>;
  loading: boolean;
  error: string | null;
}

export const UseLorawanAppByConId = (controllerId: string): LorawanAppByConIdHookInterface => {
  const [lorawanApplications, setlorawanApplications] = useState<
    Array<LorawanApplication> | []
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const lorawanAppServices = new LorawanAppService();

  const handlerLorawanAppByConId = async (): Promise<void> => {
    if (!controllerId.trim()) return;

    try {
      setLoading(true);
      setError(null);

      const data = await GetLorawanAppByControllerId(controllerId, lorawanAppServices);
      setlorawanApplications(data);
    } catch (error) {
      console.error("error loading controller: ", error);
      setError("error loading controller");
    } finally {
      setLoading(false);
    }
  };

  return {
    handlerLorawanAppByConId,
    lorawanApplications,
    loading,
    error,
  };
};
