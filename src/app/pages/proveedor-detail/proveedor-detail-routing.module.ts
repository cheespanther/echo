import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { proveedorDetailPage } from './proveedor-detail';

const routes: Routes = [
  {
    path: '',
    component: proveedorDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class proveedorDetailPageRoutingModule { }
