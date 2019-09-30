import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from "@angular/service-worker";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { environment } from "../environments/environment";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ServiceWorkerModule.register("ngsw-worker.js", { enabled: environment.production })
  ]
})
export class AppModule {
  constructor() {
    console.log("AppModule::constructor");
  }
}
