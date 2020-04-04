import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

import { configuracionModule } from '../configuracion/configuracion.module';
import { MapModule } from '../map/map.module';
import { itemsModule } from '../items/items.module';
import { itemDetailModule } from '../item-detail/item-detail.module';
import { miembroDetailModule } from '../miembro-detail/miembro-detail.module';
import { miembroListModule } from '../miembro-list/miembro-list.module';

@NgModule({
  imports: [
    configuracionModule,
    CommonModule,
    IonicModule,
    MapModule,
    itemsModule,
    itemDetailModule,
    miembroDetailModule,
    miembroListModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
