import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList, IonRouterOutlet, LoadingController, ModalController, ToastController, Config } from '@ionic/angular';

import { itemsFilterPage } from '../items-filter/items-filter';
import { ConferenceData } from '../../providers/conference-data';
import { UserData } from '../../providers/user-data';

@Component({
  selector: 'page-items',
  templateUrl: 'items.html',
  styleUrls: ['./items.scss'],
})
export class itemsPage implements OnInit {
  // Gets a reference to the list element
  @ViewChild('itemsList', { static: true }) itemsList: IonList;

  ios: boolean;
  dayIndex = 0;
  queryText = '';
  segment = 'all';
  excludecategorias: any = [];
  shownSessions: any = [];
  groups: any = [];
  confDate: string;
  showSearchbar: boolean;

  constructor(
    public alertCtrl: AlertController,
    public confData: ConferenceData,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public router: Router,
    public routerOutlet: IonRouterOutlet,
    public toastCtrl: ToastController,
    public user: UserData,
    public config: Config
  ) { }

  ngOnInit() {
    this.updateitems();

    this.ios = this.config.get('mode') === 'ios';
  }

  updateitems() {
    // Close any open sliding items when the items updates
    if (this.itemsList) {
      this.itemsList.closeSlidingItems();
    }

    this.confData.getTimeline(this.dayIndex, this.queryText, this.excludecategorias, this.segment).subscribe((data: any) => {
      this.shownSessions = data.shownSessions;
      this.groups = data.groups;
    });
  }

  async presentFilter() {
    const modal = await this.modalCtrl.create({
      component: itemsFilterPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps: { excludedcategorias: this.excludecategorias }
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      this.excludecategorias = data;
      this.updateitems();
    }
  }

  async addFavorite(slidingItem: HTMLIonItemSlidingElement, sessionData: any) {
    if (this.user.hasFavorite(sessionData.name)) {
      // Prompt to remove favorite
      this.removeFavorite(slidingItem, sessionData, 'Favorite already added');
    } else {
      // Add as a favorite
      this.user.addFavorite(sessionData.name);

      // Close the open item
      slidingItem.close();

      // Create a toast
      const toast = await this.toastCtrl.create({
        header: `${sessionData.name} was successfully added as a favorite.`,
        duration: 3000,
        buttons: [{
          text: 'Close',
          role: 'cancel'
        }]
      });

      // Present the toast at the bottom of the page
      await toast.present();
    }

  }

  async removeFavorite(slidingItem: HTMLIonItemSlidingElement, sessionData: any, title: string) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: 'Would you like to remove this session from your favorites?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            // they clicked the cancel button, do not remove the session
            // close the sliding item and hide the option buttons
            slidingItem.close();
          }
        },
        {
          text: 'Remove',
          handler: () => {
            // they want to remove this session from their favorites
            this.user.removeFavorite(sessionData.name);
            this.updateitems();

            // close the sliding item and hide the option buttons
            slidingItem.close();
          }
        }
      ]
    });
    // now present the alert on top of all other content
    await alert.present();
  }

  async openSocial(network: string, fab: HTMLIonFabElement) {
    const loading = await this.loadingCtrl.create({
      message: `Posting to ${network}`,
      duration: (Math.random() * 1000) + 500
    });
    await loading.present();
    await loading.onWillDismiss();
    fab.close();
  }
}
