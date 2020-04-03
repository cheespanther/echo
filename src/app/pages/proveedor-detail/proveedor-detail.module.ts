import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { proveedorDetailPage } from './proveedor-detail';
import { proveedorDetailPageRoutingModule } from './proveedor-detail-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    proveedorDetailPageRoutingModule
  ],
  declarations: [
    proveedorDetailPage,
  ]
})
export class proveedorDetailModule { }
