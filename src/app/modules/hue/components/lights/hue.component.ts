import {Component} from "@angular/core";
import {Room} from "../../types/room";
import {Light} from "../../types/light";
import {HueService} from "../../services/hue.service";

@Component({
  selector: "app-hue",
  templateUrl: "./hue.component.html",
  styleUrls: ["./hue.component.css"]
})
export class HueComponent {
  room: Room = new Room();

  constructor(private hueService: HueService) {
    this.refreshLights();
  }

  refreshLights() {
    this.hueService.login().subscribe((data: any) => {
      const lights: any = data.lights;
      const lightArray = new Array<Light>();
      for (const key in lights) {
        if (lights.hasOwnProperty(key)) {
          const light = new Light(parseInt(key, 10), lights[key].name, lights[key].state);
          lightArray.push(light);
        }
      }
      console.log("Lights: " + lightArray.length);
      this.room.addLights(lightArray);
    });
  }

  toggleEffect(light: Light) {
    const effect: string = light.state.effect === "colorloop" ? "none" : "colorloop";
    this.hueService.setLightEffect(light.id, effect).subscribe(edit => {
      console.log(edit);
      light.state.effect = effect;
    });
  }

  turnLightOn(light: Light) {
    const on: boolean = !light.state.on;
    this.hueService.turnLightOn(light.id, on).subscribe(edit => {
      console.log(edit);
      light.state.on = on;
    });
  }
}
