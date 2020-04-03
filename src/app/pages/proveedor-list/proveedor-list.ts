import { Component } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-proveedor-list',
  templateUrl: 'proveedor-list.html',
  styleUrls: ['./proveedor-list.scss'],
})
export class proveedorListPage {
  proveedors: any[] = [];

  constructor(public confData: ConferenceData) {}

  ionViewDidEnter() {
    this.confData.getproveedors().subscribe((proveedors: any[]) => {
      this.proveedors = proveedors;
    });
  }
}
