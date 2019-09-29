import { NgModule } from "@angular/core";
import { MapComponent } from "./map.component";

@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class MapModule {
  constructor() {
    console.log("MapModule::constructor");
  }
}
