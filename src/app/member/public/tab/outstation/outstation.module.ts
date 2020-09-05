import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutstationPageRoutingModule } from './outstation-routing.module';

import { OutstationPage } from './outstation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutstationPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [OutstationPage]
})
export class OutstationPageModule {}
