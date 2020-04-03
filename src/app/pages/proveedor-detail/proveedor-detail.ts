import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConferenceData } from '../../providers/conference-data';
import { ActionSheetController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'page-proveedor-detail',
  templateUrl: 'proveedor-detail.html',
  styleUrls: ['./proveedor-detail.scss'],
})
export class proveedorDetailPage {
  proveedor: any;

  constructor(
    private dataProvider: ConferenceData,
    private route: ActivatedRoute,
    public actionSheetCtrl: ActionSheetController,
    public confData: ConferenceData,
    public inAppBrowser: InAppBrowser,
  ) {}

  ionViewWillEnter() {
    this.dataProvider.load().subscribe((data: any) => {
      const proveedorId = this.route.snapshot.paramMap.get('proveedorId');
      if (data && data.proveedors) {
        for (const proveedor of data.proveedors) {
          if (proveedor && proveedor.id === proveedorId) {
            this.proveedor = proveedor;
            break;
          }
        }
      }
    });
  }

  openExternalUrl(url: string) {
    this.inAppBrowser.create(
      url,
      '_blank'
    );
  }

  async openproveedorShare(proveedor: any) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Share ' + proveedor.name,
      buttons: [
        {
          text: 'Copy Link',
          handler: () => {
            console.log(
              'Copy link clicked on https://twitter.com/' + proveedor.twitter
            );
            if (
              (window as any).cordova &&
              (window as any).cordova.plugins.clipboard
            ) {
              (window as any).cordova.plugins.clipboard.copy(
                'https://twitter.com/' + proveedor.twitter
              );
            }
          }
        },
        {
          text: 'Share via ...'
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }

  async openContact(proveedor: any) {
    const mode = 'ios'; // this.config.get('mode');

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Contact ' + proveedor.name,
      buttons: [
        {
          text: `Email ( ${proveedor.email} )`,
          icon: mode !== 'ios' ? 'mail' : null,
          handler: () => {
            window.open('mailto:' + proveedor.email);
          }
        },
        {
          text: `Call ( ${proveedor.phone} )`,
          icon: mode !== 'ios' ? 'call' : null,
          handler: () => {
            window.open('tel:' + proveedor.phone);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }
}
