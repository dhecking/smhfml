import { Component } from "@angular/core";

import { Room } from "../../types/room";
import { Light } from "../../types/light";
import { Location } from "../../types/location";
import { HueService } from "../../services/hue.service";

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

  turnLightOn(location: Location) {
    const on: boolean = !location.light.state.on;
    console.log(on);
    this.hueService.turnLightOn(location.id, on).subscribe(data => {
      console.log(data[0].success);
      this.hueService.getLight(location.id).subscribe((data: any) => {
        console.log(data);
        location.setLight(data);
      });
    });
  }

  update(location: Location, name: string, value: number) {
    const bri: number = location.light.state.bri;
    console.log(name + ": " + value);
    this.hueService.updateState(location.id, name, value).subscribe(data => {
      console.log(data);
      this.hueService.getLight(location.id).subscribe((data: any) => {
        console.log(data);
        location.setLight(data);
      });
    });
  }

}
