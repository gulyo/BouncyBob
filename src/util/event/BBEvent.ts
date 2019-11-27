import { guid } from "../guid";
import { IArgumentEventHandler } from "./IArgumentEventHandler";
import { EventHandler, IEvent } from "./IEvent";

// Note: This was renamed from Event to BBEvent, because phpstorm got confused
// around imports
export class BBEvent<TArgument extends IArgumentEventHandler = IArgumentEventHandler> implements IEvent<TArgument> {
  protected handlers: Map<string, EventHandler> = new Map<string, EventHandler>();

  public SignUp(handler: EventHandler<TArgument>): () => void {
    const key: string = guid();
    this.handlers.set(key, handler);
    return ((handlerId: string) => () => this.handlers.delete(handlerId))(key);
  }

  public Trigger(arg?: TArgument) {
    this.handlers.forEach(handler => handler(arg));
  }
}
