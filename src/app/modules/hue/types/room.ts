import {Light} from "./light";
import {Location} from "./location";

export class Room {
  locations = new Array<Location>();

  constructor() {
    this.locations.push(new Location(25, "archetypesFloorShade"));
    this.locations.push(new Location(18, "roomsComputer"));
    this.locations.push(new Location(20, "archetypesWallShade"));
    this.locations.push(new Location(22, "heroesLightstrip"));
    this.locations.push(new Location(24, "archetypesDeskLamp"));
    this.locations.push(new Location(17, "archetypesFloorShade"));
    this.locations.push(new Location(19, "archetypesFloorShade"));
    this.locations.push(new Location(26, "heroesLightstrip"));
    this.locations.push(new Location(23, "heroesLightstrip"));
  }

  addLights(lights: Light[]) {
    for (const location of this.locations) {
      location.setLight(this.getLight(location.id, lights));
    }
  }

  getLight(id: number, lights: Light[]): Light {
    for (const light of lights) {
      if (light.id === id) {
        return light;
      }
    }
  }
}
