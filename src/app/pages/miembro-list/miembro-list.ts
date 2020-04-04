import { Component } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-miembro-list',
  templateUrl: 'miembro-list.html',
  styleUrls: ['./miembro-list.scss'],
})
export class miembroListPage {
  miembro: any[] = [];

  constructor(public confData: ConferenceData) {}

  ionViewDidEnter() {
    this.confData.getmiembro().subscribe((miembro: any[]) => {
      this.miembro = miembro;
    });
  }
}
