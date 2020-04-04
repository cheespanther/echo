import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { itemsPage } from '../items/items';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'items',
        children: [
          {
            path: '',
            component: itemsPage,
          },
          {
            path: 'item/:itemId',
            loadChildren: () => import('../item-detail/item-detail.module').then(m => m.itemDetailModule)
          }
        ]
      },
      {
        path: 'miembro',
        children: [
          {
            path: '',
            loadChildren: () => import('../miembro-list/miembro-list.module').then(m => m.miembroListModule)
          },
          {
            path: 'item/:itemId',
            loadChildren: () => import('../item-detail/item-detail.module').then(m => m.itemDetailModule)
          },
          {
            path: 'miembro-details/:miembroId',
            loadChildren: () => import('../miembro-detail/miembro-detail.module').then(m => m.miembroDetailModule)
          }
        ]
      },
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: () => import('../map/map.module').then(m => m.MapModule)
          }
        ]
      },
      {
        path: 'configuracion',
        children: [
          {
            path: '',
            loadChildren: () => import('../configuracion/configuracion.module').then(m => m.configuracionModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/items',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
