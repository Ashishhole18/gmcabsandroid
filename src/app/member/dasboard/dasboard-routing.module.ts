import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DasboardPage } from './dasboard.page';

const routes: Routes = [
  {
    path: '',
    component: DasboardPage,
    children : [
      {
        path: '',
        loadChildren: () => import('../public/tab/local/local.module').then( m => m.LocalPageModule)
      },
      {
        path: 'local',
        loadChildren: () => import('../public/tab/local/local.module').then( m => m.LocalPageModule)
      },
      {
        path: 'outstation',
        loadChildren: () => import('../public/tab/outstation/outstation.module').then( m => m.OutstationPageModule)
      },
      {
        path: '',
        redirectTo:'members/dashboard/local',
        pathMatch:'full'
      }
    ]
  },
  {
    path: 'yourrides',
    loadChildren: () => import('../public/yourrides/yourrides.module').then( m => m.YourridesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DasboardPageRoutingModule {}
