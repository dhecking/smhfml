import { NgModule } from "@angular/core";

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from "./map.component";

@NgModule({
  declarations: [MapComponent],
  imports: [MapRoutingModule]
})
export class MapModule {
  constructor() {
    console.log("MapModule::constructor");
  }
}
