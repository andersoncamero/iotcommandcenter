import type { WsEvent } from "../entities/WSEvent";

type MessageHandler<T> = (event: T) => void;
type ConnectionHandler = (connected: boolean) => void;

export class WSClient<TPayload> {
  private socket?: WebSocket;
  private handlers = new Set<MessageHandler<WsEvent<TPayload>>>();
  private connectionHandlers = new Set<ConnectionHandler>();

  constructor(private readonly url: string) {}

  connect() {
    if (this.socket) return;

    this.socket = new WebSocket(this.url);

    this.socket.onopen = () => {
      this.connectionHandlers.forEach((h) => h(true));
    };

    this.socket.onclose = () => {
      this.connectionHandlers.forEach((h) => h(false));
    };

    this.socket.onerror = () => {
      this.connectionHandlers.forEach((h) => h(false));
    };

    this.socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data) as WsEvent<TPayload>;
        this.handlers.forEach((handler) => handler(data));
      } catch (error) {
        console.error("WS message parse error", error);
      }
    };
  }

  disconnect() {
    this.socket?.close();
    this.socket = undefined;
    this.handlers.clear();
    this.connectionHandlers.clear();
  }

  send(payload: unknown) {
    if (this.socket?.readyState !== WebSocket.OPEN) return;
    this.socket.send(JSON.stringify(payload));
  }

  subscribe(handler: MessageHandler<WsEvent<TPayload>>) {
    this.handlers.add(handler);
    return () => this.handlers.delete(handler);
  }

  onConnectionChange(handler: ConnectionHandler) {
    this.connectionHandlers.add(handler);
    return () => this.connectionHandlers.delete(handler);
  }
}
