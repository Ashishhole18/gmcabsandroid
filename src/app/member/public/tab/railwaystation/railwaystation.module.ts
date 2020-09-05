import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RailwaystationPageRoutingModule } from './railwaystation-routing.module';

import { RailwaystationPage } from './railwaystation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RailwaystationPageRoutingModule
  ],
  declarations: [RailwaystationPage]
})
export class RailwaystationPageModule {}
