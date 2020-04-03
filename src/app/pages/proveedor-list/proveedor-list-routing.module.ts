import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { proveedorListPage } from './proveedor-list';
const routes: Routes = [
  {
    path: '',
    component: proveedorListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class proveedorListPageRoutingModule {}
