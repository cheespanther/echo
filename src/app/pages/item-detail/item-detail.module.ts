import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { itemDetailPage } from './item-detail';
import { itemDetailPageRoutingModule } from './item-detail-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    itemDetailPageRoutingModule
  ],
  declarations: [
    itemDetailPage,
  ]
})
export class itemDetailModule { }
