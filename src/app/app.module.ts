import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';

import { MatIconModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';

import { HueService } from './services/hue.service';
import { PubnubService } from './services/pubnub.service';
import { WebNotificationService } from './services/web-notification.service';

import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/home/home.component';
import { MapComponent } from './components/map/map.component';
import { GridComponent } from './components/grid/grid.component';
import { CameraComponent } from './components/camera/camera.component';
import { ErrorComponent } from './components/error/error.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NotificationComponent } from './components/notification/notification.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HueComponent } from './components/hue/hue.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'maps', component: MapComponent },
  { path: 'hue', component: HueComponent },
  { path: 'camera', component: CameraComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    SidenavComponent,
    GridComponent,
    MapComponent,
    SidenavComponent,
    FooterComponent,
    NotificationComponent,
    SettingsComponent,
    HomeComponent,
    CameraComponent,
    HueComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatTabsModule,
    MatSidenavModule,
    MatSliderModule,
    MatGridListModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // debugging purposes only
    ),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    HueService,
    PubnubService,
    WebNotificationService
  ],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA // IMPORTANT: need that for AoT compilation
  ],
  exports: [FooterComponent]
})
export class AppModule {}
