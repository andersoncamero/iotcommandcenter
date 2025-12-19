import type { Controller } from "../entities/Controller";

export interface ControllerServicesInterfaces {
  GetControllerById: (controllerID: string) => Promise<Controller>;
  GetControllerByUserId: (userId: string) => Promise<Array<Controller> | []>;
}

export class ControllerServices implements ControllerServicesInterfaces {
  async GetControllerById(controllerID: string): Promise<Controller> {
    const token = localStorage.getItem("token");

    const response = await fetch(
      import.meta.env.VITE_API_URL + "/controllers/controller/" + controllerID,
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

  async GetControllerByUserId(userId: string): Promise<Array<Controller> | []> {
    const token = localStorage.getItem("token");
    const response = await fetch(
      import.meta.env.VITE_API_URL + "/controllers/" + userId,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();
    return data
  }
}
