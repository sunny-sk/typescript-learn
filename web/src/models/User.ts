interface UserProps {
  name?: string;
  age?: string;
}

type Callback = () => void;

export class User {
  events: {
    [key: string]: Callback[];
  } = {};

  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, cb: Callback) {
    const handlers = this.events[eventName] || [];
    handlers.push(cb);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const triggers = this.events[eventName];
    if (!triggers || triggers.length === 0) {
      return;
    }
    triggers.map((cb) => cb());
  }
}
