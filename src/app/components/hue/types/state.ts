
export class State {
  on: boolean;
  bri: number;
  hue: number;
  sat: number;
  effect: string;
  xy: number[];
  ct: number;
  alert: string;
  colormode: string;
  mode: string;
  reachable: boolean;

  constructor(state: any) {
    this.on = state.on;
    this.bri = state.bri;
    this.hue = state.hue;
    this.sat = state.sat;
    this.effect = state.effect;
    this.xy = state.xy;
    this.ct = state.ct;
    this.alert = state.alert;
    this.colormode = state.colormode;
    this.mode = state.mode;
    this.reachable = state.reachable;
  }


}
