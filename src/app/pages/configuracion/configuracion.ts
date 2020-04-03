import { Component } from '@angular/core';

import { PopoverController } from '@ionic/angular';

import { configuracionPopover } from '../configuracion-popover/configuracion-popover';

@Component({
  selector: 'page-configuracion',
  templateUrl: 'configuracion.html',
  styleUrls: ['./configuracion.scss'],
})
export class configuracionPage {
  location = 'cdmx';
  conferenceDate = '2047-05-17';

  selectOptions = {
    header: 'Selecciona una ubicacion'
  };

  constructor(public popoverCtrl: PopoverController) { }

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: configuracionPopover,
      event
    });
    await popover.present();
  }
}
