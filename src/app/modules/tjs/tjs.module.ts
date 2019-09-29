import {NgModule} from "@angular/core";
import {MatIconRegistry} from "@angular/material/icon";

import {TjsComponent} from "./tjs.component";

@NgModule({
  declarations: [TjsComponent]
})
export class TjsModule {
  constructor(private matIconRegistry: MatIconRegistry) {
    console.log("TjsModule::constructor");
  }
}
