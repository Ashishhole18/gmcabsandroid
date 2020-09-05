import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartpagePageRoutingModule } from './startpage-routing.module';

import { StartpagePage } from './startpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartpagePageRoutingModule
  ],
  declarations: [StartpagePage]
})
export class StartpagePageModule {}
