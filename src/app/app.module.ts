import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from "@angular/service-worker";

import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { environment } from "../environments/environment";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule, BrowserAnimationsModule,
    HttpClientModule,
    MatGridListModule,
    MatIconModule,
    ServiceWorkerModule.register("ngsw-worker.js", { enabled: environment.production })
  ]
})
export class AppModule {
  constructor() {
    console.log("AppModule::constructor");
  }
}
