import {NgModule} from "@angular/core";
import {MatIconRegistry} from "@angular/material/icon";

import {ErrComponent} from "./err.component";

@NgModule({
  declarations: [ErrComponent]
})
export class ErrModule {
  constructor(private matIconRegistry: MatIconRegistry) {
    console.log("ErrModule::constructor");
  }
}
