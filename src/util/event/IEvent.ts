export interface IEventHandlerArgument {
  [key: string]: any;
}

export type EventHandler = (arg: IEventHandlerArgument) => void;

export interface IEvent {
  SignUp(handler: EventHandler): () => void;

  Trigger(arg?: IEventHandlerArgument);
}
