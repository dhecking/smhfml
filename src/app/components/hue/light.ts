import { State } from "./state";

export class Light {
  id: string;
  name: string;
  state: State;

  constructor(id: string, name: string, state: any) {
    this.id = id;
    this.name = name;
    this.state = new State(state);
  }
}
