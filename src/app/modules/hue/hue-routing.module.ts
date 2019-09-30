import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HueComponent } from "./hue.component";

const routes: Routes = [
    {
        path: "",
        component: HueComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class HueRoutingModule {
    constructor() {
        console.log("HueRoutingModule::constructor");
    }
}
