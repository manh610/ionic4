import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResignterPageRoutingModule } from './resignter-routing.module';

import { ResignterPage } from './resignter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResignterPageRoutingModule
  ],
  declarations: [ResignterPage]
})
export class ResignterPageModule {}
