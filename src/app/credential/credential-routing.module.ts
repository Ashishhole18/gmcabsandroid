import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CredentialPage } from './credential.page';

const routes: Routes = [
  {
    path: '',
    component: CredentialPage,
    children:[
      {
        path:'login',
        loadChildren:()=>import('./login/login.module').then(m=>m.LoginPageModule)
      },
      {
        path:'register',
        loadChildren:()=>import('./register/register.module').then(m=>m.RegisterPageModule)
      },
      {
        path: '',
        redirectTo: '/credential/login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'support',
    loadChildren: () => import('./support/support.module').then( m => m.SupportPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CredentialPageRoutingModule {}
