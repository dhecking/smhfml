import {NgModule} from "@angular/core";
import {MatIconRegistry} from "@angular/material/icon";

import {CamComponent} from "./cam.component";

@NgModule({
  declarations: [CamComponent]
})
export class CamModule {
  constructor(private matIconRegistry: MatIconRegistry) {
    console.log("CamModule::constructor");
  }
}
