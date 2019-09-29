import { NgModule } from "@angular/core";
import { OneComponent } from "./one.component";

@NgModule({
  declarations: [OneComponent]
})
export class OneModule {
  constructor() {
    console.log("OneModule::constructor");
  }
}
