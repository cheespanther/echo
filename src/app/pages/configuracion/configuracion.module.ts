import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { configuracionPage } from './configuracion';
import { configuracionPopover } from '../configuracion-popover/configuracion-popover';
import { configuracionPageRoutingModule } from './configuracion-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    configuracionPageRoutingModule
  ],
  declarations: [configuracionPage, configuracionPopover],
  entryComponents: [configuracionPopover],
  bootstrap: [configuracionPage],
})
export class configuracionModule {}
