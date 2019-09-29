import { NgModule } from "@angular/core";

import { CfgComponent } from "./cfg.component";

@NgModule({
  declarations: [CfgComponent]
})
export class CfgModule {
  constructor() {
    console.log("CfgModule::constructor");
  }
}
