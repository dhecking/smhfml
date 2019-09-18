import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';

import { MatIconModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';

import { PubnubService } from './services/pubnub.service';
import { WebNotificationService } from './services/web-notification.service';

import { AppComponent } from './components/app.component';
import { MapComponent } from './components/map/map.component';
import { GridComponent } from './components/grid/grid.component';
import { ErrorComponent } from './components/error/error.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NotificationComponent } from './components/notification/notification.component';
import { SettingsComponent } from './components/settings/settings.component';

const appRoutes: Routes = [
  { path: '', component: MapComponent },
  { path: 'map', component: MapComponent },
  { path: 'settings', component: SettingsComponent },
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
      { enableTracing: false } // debugging purposes only
    ),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  declarations: [
    AppComponent,
    ErrorComponent,
    SidenavComponent,
    GridComponent,
    MapComponent,
    SidenavComponent,
    FooterComponent,
    NotificationComponent,
    SettingsComponent
  ],
  providers: [
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
