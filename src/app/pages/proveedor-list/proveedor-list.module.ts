import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { proveedorListPage } from './proveedor-list';
import { proveedorListPageRoutingModule } from './proveedor-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    proveedorListPageRoutingModule
  ],
  declarations: [proveedorListPage],
})
export class proveedorListModule {}
