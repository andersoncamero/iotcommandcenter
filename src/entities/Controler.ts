export interface Controler {
  ID: string;
  UserId: string;
  Name: string;
  UserchirpstackId: string;
  IP: string;
  TenantId: Array<string>;
  Token: string;
  Application: Array<string>;
  LoraGateways: Array<LoraGateways>;
  DeviceId: string;
}

export interface LoraGateways {
  ID: string;
  Name: string;
  Description: string;
  TenantId: string;
  Properties: Array<object>;
  Status: string;
}
