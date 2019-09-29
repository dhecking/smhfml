import {State} from "./state";

export class Light {
  id: number;
  name: string = "";
  state: State;

  constructor(id: number, name: string, state: any) {
    this.id = id;
    this.name = name;
    this.state = new State(state);
  }

}
