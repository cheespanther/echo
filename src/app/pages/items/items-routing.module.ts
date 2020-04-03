import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { itemsPage } from './items';

const routes: Routes = [
  {
    path: '',
    component: itemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class itemsPageRoutingModule { }
