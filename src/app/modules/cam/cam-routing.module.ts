import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamComponent } from "./cam.component";

const routes: Routes = [
    {
        path: "",
        component: CamComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class CamRoutingModule {
    constructor() {
        console.log("CamRoutingModule::constructor");
    }
}
