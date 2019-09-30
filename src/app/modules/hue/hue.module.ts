import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { MatIconRegistry, MatIcon } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material";
import { MatCardModule } from "@angular/material/card";
import { MatSliderModule } from "@angular/material/slider";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

import { HueRoutingModule } from './hue-routing.module';
import { HueComponent } from "./components/lights/hue.component";

@NgModule({
  declarations: [HueComponent],
  imports: [CommonModule, HueRoutingModule, MatButtonModule, MatCardModule, MatIconModule, MatSliderModule, MatSlideToggleModule]
})
export class HueModule {
  constructor(private matIconRegistry: MatIconRegistry) {
    console.log("HueModule::constructor");
    this.matIconRegistry.addSvgIcon(`lightstrip`, `assets/herosLightstrip.svg`);
  }
}
