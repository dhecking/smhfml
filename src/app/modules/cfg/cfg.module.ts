import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { CfgRoutingModule } from './cfg-routing.module';
import { CfgComponent } from "./cfg.component";

@NgModule({
  declarations: [CfgComponent],
  imports: [CommonModule, CfgRoutingModule]
})
export class CfgModule {
  constructor() {
    console.log("CfgModule::constructor");
  }
}
