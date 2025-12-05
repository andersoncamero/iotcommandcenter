export interface Devices {
  ID: string;
  Name: string;
  Description: string;
  ApplicationID: string;
  DeviceProId: string;
  JoinID: string;
  Status: DeviceStaus;
  ClasssEnabled: string;
  SkipFcntCheck: boolean;
  IsDisabled: boolean;
}

interface DeviceStaus {
  Margin: number;
  ExternalPowerSource: boolean;
  BatteryLevel: number;
}
