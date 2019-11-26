import { guid } from "../guid";
import { EventHandler, IEvent, IEventHandlerArgument } from "./IEvent";

// Note: This was renamed from Event to BBEvent, because phpstorm got confused
// around imports
export class BBEvent implements IEvent {
  protected handlers: Map<string, EventHandler> = new Map<string, EventHandler>();

  public SignUp(handler: EventHandler): () => void {
    const key: string = guid();
    this.handlers.set(key, handler);
    return ((handlerId: string) => () => this.handlers.delete(handlerId))(key);
  }

  public Trigger(arg?: IEventHandlerArgument) {
    this.handlers.forEach(handler => handler(arg));
  }
}
