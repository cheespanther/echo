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
            path: 'session/:sessionId',
            loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          }
        ]
      },
      {
        path: 'proveedors',
        children: [
          {
            path: '',
            loadChildren: () => import('../proveedor-list/proveedor-list.module').then(m => m.proveedorListModule)
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          },
          {
            path: 'proveedor-details/:proveedorId',
            loadChildren: () => import('../proveedor-detail/proveedor-detail.module').then(m => m.proveedorDetailModule)
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
