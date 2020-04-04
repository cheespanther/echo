import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { miembroDetailPage } from './miembro-detail';
import { miembroDetailPageRoutingModule } from './miembro-detail-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    miembroDetailPageRoutingModule
  ],
  declarations: [
    miembroDetailPage,
  ]
})
export class miembroDetailModule { }
