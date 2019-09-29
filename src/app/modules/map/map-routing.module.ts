import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapComponent } from "./map.component";

const mapRoutes: Routes = [
  {
    path: "",
    component: MapComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(mapRoutes)],
  exports: [RouterModule],
  providers: []
})
export class MapRoutingModule {
  constructor() {
    console.log("MapRoutingModule::constructor");
  }
}
