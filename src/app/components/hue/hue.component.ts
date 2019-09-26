import { Component } from '@angular/core';
import { Room } from "./types/room";
import { Light } from "./types/light";
import { HueService } from "../../services/hue.service";

/**
 * http://arndbrugman.github.io/huepi/hueMediate/index.html
 * https://hue-debugger-ui.com/
 */
@Component({
  selector: 'app-hue',
  templateUrl: './hue.component.html',
  styleUrls: ['./hue.component.css']
})
export class HueComponent {
  room: Room = new Room();

  constructor(private hueService: HueService) {
    this.refreshLights();
  }

  refreshLights() {
    this.hueService.getLights().subscribe( data => {
      const lights = new Array<Light>();
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const light = new Light(parseInt(key, 10), data[key].name, data[key].state);
          lights.push(light);
        }
      }
      this.room.addLights(lights);
    });
  }

  toggleEffect(light: Light) {
      const effect: string = light.state.effect === "colorloop" ? "none" : "colorloop";
      this.hueService.setLightEffect(light.id, effect).subscribe( edit => {
        console.log(edit);
        light.state.effect = effect;
      });
  }

  turnLightOn(light: Light) {
    const on: boolean = !light.state.on;
    this.hueService.turnLightOn(light.id, on).subscribe( edit => {
      console.log(edit);
      light.state.on = on;
    });
}

}
