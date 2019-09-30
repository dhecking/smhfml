import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'one', loadChildren: () => import('./modules/one/one.module').then(mod => mod.OneModule) },
  { path: 'map', loadChildren: () => import('./modules/map/map.module').then(mod => mod.MapModule) },
  { path: 'hue', loadChildren: () => import('./modules/hue/hue.module').then(mod => mod.HueModule) },
  { path: 'cam', loadChildren: () => import('./modules/cam/cam.module').then(mod => mod.CamModule) },
  { path: 'cfg', loadChildren: () => import('./modules/cfg/cfg.module').then(mod => mod.CfgModule) },
  // { path: '**', loadChildren: () => import('./modules/err/err.module').then(mod => mod.ErrModule) },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {
    console.log('AppRoutingModule::constructor');
  }
}
