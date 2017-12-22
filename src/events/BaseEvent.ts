export class BaseEvent  {
  public readonly eventType: string = (<object>this).constructor.name;

  public static get eventType(): string {
    return this.name;
  }
}
