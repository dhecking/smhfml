import {Light} from "./light";
import {getRGBFromXYAndBrightness} from "./color";

export class Location {
  id: number;
  icon: string;
  rgb: Array<number>;
  styleBackground: string;
  styleBackgroundColor: string;
  styleBackgroundImage: string;
  light: Light;

  constructor(id: number, icon: string) {
    this.id = id;
    this.icon = "/assets/hue/" + icon + ".svg";
    this.light = new Light(0, "", "");
  }

  setLight(light: Light) {
    this.light = light;
    this.updateProps();
  }

  updateProps() {
    const state = this.light.state;
    if (state) {
      this.rgb = getRGBFromXYAndBrightness(state.xy[0], state.xy[1], state.bri);
      this.styleBackgroundImage = "url('" + this.icon + "')";
      this.styleBackgroundColor = (state.on ? "rgb(" + this.rgb + ")" : "black");
      this.styleBackground =  this.styleBackgroundColor + " center no-repeat";
    }
  }
}
