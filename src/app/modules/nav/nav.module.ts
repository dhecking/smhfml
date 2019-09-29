import { NgModule } from "@angular/core";

import { MatIconRegistry, MatIcon } from "@angular/material/icon";

import { NavComponent } from "./nav.component";

@NgModule({
  declarations: [NavComponent, MatIcon]
})
export class NavModule {
  constructor(private matIconRegistry: MatIconRegistry) {
    console.log("NavModule::constructor");
  }
}
