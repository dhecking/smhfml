import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material";

import { NavComponent } from "./nav.component";

@NgModule({
  declarations: [NavComponent],
  imports: [MatIconModule]
})
export class NavModule {
  constructor() {
    console.log("NavModule::constructor");
  }
}
