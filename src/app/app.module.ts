import { NgModule } from '@angular/core';
import { MatIconModule, MatToolbarModule, MatSlideToggleModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { GridComponent } from './grid.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, MatIconModule, MatToolbarModule, MatSlideToggleModule, MatGridListModule],
  declarations: [AppComponent, GridComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
