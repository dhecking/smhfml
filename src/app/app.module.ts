import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { MatIconModule, MatToolbarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { GridComponent } from './grid/grid.component';
import { ThreeComponent } from './three/three.component';
import { MapComponent } from './map/map.component';
import { EngineComponent } from './engine/engine.component';
import { GltfComponent } from './gltf/gltf.component';

@NgModule({
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCtJHMfTjRQH3vq5aqkeFzUfci92_bsOuA'
    }),
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatMenuModule,
    MatToolbarModule,
    MatGridListModule
  ],
  declarations: [AppComponent, EngineComponent, GltfComponent, ToolbarComponent, GridComponent, ThreeComponent, MapComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
