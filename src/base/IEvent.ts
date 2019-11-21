export interface IEventHandlerArgument {
  [key: string]: any;
}

export default interface IEvent {
  SignUp(handler: (arg: IEventHandlerArgument) => void): () => void;
  Trigger(arg: IEventHandlerArgument);
}
