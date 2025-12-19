import { useState } from "react";

import { LorawanAppService } from "../services/LorawanAppServices";
import { SyncApp } from "../useCases/SyncApp";
import type { LorawanApplication } from "../entities/Devices";

export interface SyncAppHookInterface {
  handlerSyncApp: () => void;
  lorawanApplications: Array<LorawanApplication>;
  loading: boolean;
  error: string | null;
}

export const UseSyncApp = (controllerId: string): SyncAppHookInterface => {
  const [lorawanApplications, setlorawanApplications] =
    useState<Array<LorawanApplication> | []>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const lorawanAppServices = new LorawanAppService();

  const handlerSyncApp = async (): Promise<void> => {
    if (!controllerId.trim()) return;

    try {
      setLoading(true);
      setError(null);

      const data = await SyncApp(controllerId, lorawanAppServices);
      setlorawanApplications(data);
    } catch (error) {
      console.error("error loading controller: ", error);
      setError("error loading controller");
    } finally {
      setLoading(false);
    }
  };

  return {
    handlerSyncApp,
    lorawanApplications, 
    loading,
    error,
  };
};
