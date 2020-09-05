import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YourridesPage } from './yourrides.page';

const routes: Routes = [
  {
    path: '',
    component: YourridesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourridesPageRoutingModule {}
