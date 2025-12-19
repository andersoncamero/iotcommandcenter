import { useEffect, useRef, useState } from "react";
import { WSClient } from "../services/wsClient";
import type { WsEvent } from "../entities/WSEvent";

export function useWebSocket<TPayload>(url: string) {
  const clientRef = useRef<WSClient<TPayload> | null>(null);

  const [event, setEvent] = useState<WsEvent<TPayload> | null>(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const client = new WSClient<TPayload>(url);
    clientRef.current = client;

    const unsubscribeEvents = client.subscribe(setEvent);
    const unsubscribeConnection = client.onConnectionChange(setConnected);

    client.connect();

    return () => {
        unsubscribeEvents();
        unsubscribeConnection();
        client.disconnect();
      };
  }, [url]);

  const send = (payload: unknown) => {
    clientRef.current?.send(payload);
  };

  return {
    event,
    connected,
    send,
  };
}
