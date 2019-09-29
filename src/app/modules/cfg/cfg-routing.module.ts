import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CfgComponent } from "./cfg.component";

const cfgRoutes: Routes = [
  {
    path: "",
    component: CfgComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(cfgRoutes)],
  exports: [RouterModule],
  providers: []
})
export class CfgRoutingModule {
  constructor() {
    console.log("CfgRoutingModule::constructor");
  }
}
