import { NgModule } from "@angular/core";

import { OneRoutingModule } from './one-routing.module';
import { OneComponent } from "./one.component";

@NgModule({
  declarations: [OneComponent],
  imports: [OneRoutingModule]
})
export class OneModule {
  constructor() {
    console.log("OneModule::constructor");
  }
}
