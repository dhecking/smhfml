import { NgModule } from "@angular/core";

import { MatIconRegistry, MatIcon } from "@angular/material/icon";

import { HueComponent } from "./components/lights/hue.component";

@NgModule({
  declarations: [HueComponent]
})
export class HueModule {
  constructor(private matIconRegistry: MatIconRegistry) {
    console.log("HueModule::constructor");
    this.matIconRegistry.addSvgIcon(`lightstrip`, `assets/herosLightstrip.svg`);
  }
}
