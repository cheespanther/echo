import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

import { configuracionModule } from '../configuracion/configuracion.module';
import { MapModule } from '../map/map.module';
import { itemsModule } from '../items/items.module';
import { SessionDetailModule } from '../session-detail/session-detail.module';
import { proveedorDetailModule } from '../proveedor-detail/proveedor-detail.module';
import { proveedorListModule } from '../proveedor-list/proveedor-list.module';

@NgModule({
  imports: [
    configuracionModule,
    CommonModule,
    IonicModule,
    MapModule,
    itemsModule,
    SessionDetailModule,
    proveedorDetailModule,
    proveedorListModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
