import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes,RouterModule } from '@angular/router';
const routes: Routes=[
  {
    path: 'dashboard',
    loadChildren: () => import('./dasboard/dasboard.module').then( m => m.DasboardPageModule)
  },
  {
    path: 'local',
    loadChildren: () => import('./public/tab/local/local.module').then( m => m.LocalPageModule)
  },
  {
    path: 'outstation',
    loadChildren: () => import('./public/tab/outstation/outstation.module').then( m => m.OutstationPageModule)
  },
  {
    path: 'railwaystation',
    loadChildren: () => import('./public/tab/railwaystation/railwaystation.module').then( m => m.RailwaystationPageModule)
  },
  {
    path: 'yourrides',
    loadChildren: () => import('./public/yourrides/yourrides.module').then( m => m.YourridesPageModule)
  }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports : [RouterModule]
})
export class MemberRoutingModule { }
