export interface WsEvent<TPayload = unknown> {
  DeviceID: string;
  Description: string;
  Payload: Payload<TPayload>;
  Properties: Properties;
}

interface Payload<T> {
  Object: T;
  Time: string;
}

interface Properties {
  Data: string;
  FCnt: string;
  FPort: string;
  DR: string;
}
