import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { MatIconModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
// import { GltfComponent } from './gltf/gltf.component';
import { GridComponent } from './grid/grid.component';
import { ErrorComponent } from './error/error.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { NotificationComponent } from './components/notification.component';


import { WebNotificationService } from './services/web-notification.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  { path: 'map', component: MapComponent },
  // { path: '3d', component: GltfComponent },
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
    MatTabsModule,
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
    // GltfComponent,
    ErrorComponent,
    SidenavComponent,
    GridComponent,
    MapComponent,
    SidenavComponent,
    FooterComponent,
    NotificationComponent
  ],
  providers:[
    WebNotificationService
  ],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA // IMPORTANT: need that for AoT compilation
  ],
  exports: [FooterComponent]
})
export class AppModule {}
