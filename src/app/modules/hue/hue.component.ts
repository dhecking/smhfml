import { Component } from "@angular/core";

import { Room } from "./types/room";
import { Light } from "./types/light";
import { Location } from "./types/location";
import { HueService } from "./hue.service";

@Component({
  selector: "app-hue",
  templateUrl: "./hue.component.html",
  styleUrls: ["./hue.component.css"]
})
export class HueComponent {
  room: Room = new Room();

  constructor(private hueService: HueService) {
    console.log("HueComponent::constructor");
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
      console.log(edit, light);
      light.state.effect = effect;
    });
  }

  update(location: Location, name: string, value: any) {
    this.hueService.updateState(location.id, name, value).subscribe((data: any) => {
      if (data[0]) {
        this.hueService.getLight(location.id).subscribe((data: any) => {
          location.setLight(data);
        });
      }
    });
  }

}
