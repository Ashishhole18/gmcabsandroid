import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGaurdService } from './services/auth-gaurd.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'startup',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'startpage',
    loadChildren: () => import('./startpage/startpage.module').then( m => m.StartpagePageModule)
  },
  {
    path: 'credential',
    loadChildren: () => import('./credential/credential.module').then( m => m.CredentialPageModule)
  },
  {
    path: 'member',
    canActivate: [AuthGaurdService],
    loadChildren: () => import('./member/member-routing.module').then( m => m.MemberRoutingModule)
  },
  {
    path: 'startup',
    loadChildren: () => import('./startup/startup.module').then( m => m.StartupPageModule)
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
