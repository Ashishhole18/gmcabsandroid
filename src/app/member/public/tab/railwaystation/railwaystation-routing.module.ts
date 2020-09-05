import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RailwaystationPage } from './railwaystation.page';

const routes: Routes = [
  {
    path: '',
    component: RailwaystationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RailwaystationPageRoutingModule {}
