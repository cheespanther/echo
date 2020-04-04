import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { miembroListPage } from './miembro-list';
import { miembroListPageRoutingModule } from './miembro-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    miembroListPageRoutingModule
  ],
  declarations: [miembroListPage],
})
export class miembroListModule {}
