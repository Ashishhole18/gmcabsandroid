import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourridesPageRoutingModule } from './yourrides-routing.module';

import { YourridesPage } from './yourrides.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourridesPageRoutingModule
  ],
  declarations: [YourridesPage]
})
export class YourridesPageModule {}
