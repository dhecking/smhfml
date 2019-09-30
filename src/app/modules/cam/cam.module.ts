import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { MatIconRegistry } from "@angular/material/icon";

import { CamRoutingModule } from './cam-routing.module';
import { CamComponent } from "./cam.component";

@NgModule({
  declarations: [CamComponent],
  imports: [CommonModule, CamRoutingModule]
})
export class CamModule {
  constructor(private matIconRegistry: MatIconRegistry) {
    console.log("CamModule::constructor");
  }
}
