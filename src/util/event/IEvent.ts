import { IArgumentEventHandler } from "./IArgumentEventHandler";

export type EventHandler<TArgument extends IArgumentEventHandler = IArgumentEventHandler> = (arg?: TArgument) => void;

export interface IEvent<TArgument extends IArgumentEventHandler = IArgumentEventHandler> {
  SignUp(handler: EventHandler<TArgument>): () => void;

  Trigger(arg?: TArgument);
}
