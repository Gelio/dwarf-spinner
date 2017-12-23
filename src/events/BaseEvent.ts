export class BaseEvent  {
  public readonly eventType: string = (<object>this).constructor.name;
}
