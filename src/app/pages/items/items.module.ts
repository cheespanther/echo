import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { itemsPage } from './items';
import { itemsFilterPage } from '../items-filter/items-filter';
import { itemsPageRoutingModule } from './items-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    itemsPageRoutingModule
  ],
  declarations: [
    itemsPage,
    itemsFilterPage
  ],
  entryComponents: [
    itemsFilterPage
  ]
})
export class itemsModule { }
