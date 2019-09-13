import { NgModule } from '@angular/core';

import { MatIconModule, MatToolbarModule } from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TabComponent } from './tab/tab.component';
import { GridComponent } from './grid/grid.component';
import { ThreeComponent } from './three/three.component';
import { MapComponent } from './map/map.component';
import { EngineComponent } from './engine/engine.component';
import { GltfComponent } from './gltf/gltf.component';
import { ErrorComponent } from './error/error.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SidenavComponent } from './sidenav/sidenav.component';

const appRoutes: Routes = [
  { path: 'map', component: MapComponent },
  { path: '3d', component: GltfComponent },
  { path: 'grid', component: GridComponent },
  { path: '', redirectTo: '/map', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatGridListModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  declarations: [
    AppComponent,
    EngineComponent,
    GltfComponent,
    ErrorComponent,
    SidenavComponent,
    GridComponent,
    ThreeComponent,
    MapComponent,
    TabComponent,
    SidenavComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
