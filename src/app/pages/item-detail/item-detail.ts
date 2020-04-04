import { Component } from '@angular/core';

import { ConferenceData } from '../../providers/conference-data';
import { ActivatedRoute } from '@angular/router';
import { UserData } from '../../providers/user-data';

@Component({
  selector: 'page-item-detail',
  styleUrls: ['./item-detail.scss'],
  templateUrl: 'item-detail.html'
})
export class itemDetailPage {
  item: any;
  isFavorite = false;
  defaultHref = '';

  constructor(
    private dataProvider: ConferenceData,
    private userProvider: UserData,
    private route: ActivatedRoute
  ) { }

  ionViewWillEnter() {
    this.dataProvider.load().subscribe((data: any) => {
      if (data && data.schedule && data.schedule[0] && data.schedule[0].groups) {
        const itemId = this.route.snapshot.paramMap.get('itemId');
        for (const group of data.schedule[0].groups) {
          if (group && group.items) {
            for (const item of group.items) {
              if (item && item.id === itemId) {
                this.item = item;

                this.isFavorite = this.userProvider.hasFavorite(
                  this.item.name
                );

                break;
              }
            }
          }
        }
      }
    });
  }

  ionViewDidEnter() {
    this.defaultHref = `/app/tabs/schedule`;
  }

  itemClick(item: string) {
    console.log('Clicked', item);
  }

  toggleFavorite() {
    if (this.userProvider.hasFavorite(this.item.name)) {
      this.userProvider.removeFavorite(this.item.name);
      this.isFavorite = false;
    } else {
      this.userProvider.addFavorite(this.item.name);
      this.isFavorite = true;
    }
  }

  shareitem() {
    console.log('Clicked share item');
  }
}
