import type { LorawanApplication } from "../entities/Devices";

export interface LorawanAppServiceInterface {
  SyncApp: (constrollerID: string) => Promise<Array<LorawanApplication> | []>;
  GetLorawanAppByControllerID(
    controllerID: string
  ): Promise<Array<LorawanApplication> | []>;
}

export class LorawanAppService implements LorawanAppServiceInterface {
  async SyncApp(controllerID: string): Promise<Array<LorawanApplication> | []> {
    const body = { controller_id: controllerID };
    const token = localStorage.getItem("token");

    const response = await fetch(
      import.meta.env.VITE_API_URL + "/app-chirp-stack/sync",
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
    return data;
  }

  async GetLorawanAppByControllerID(
    controllerID: string
  ): Promise<Array<LorawanApplication> | []> {
    const token = localStorage.getItem("token");

    const response = await fetch(
      import.meta.env.VITE_API_URL + "/app-chirp-stack/" + controllerID,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      console.error(`Error fetching product: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  }
}
