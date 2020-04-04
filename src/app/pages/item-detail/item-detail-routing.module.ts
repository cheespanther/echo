import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { itemDetailPage } from './item-detail';

const routes: Routes = [
  {
    path: '',
    component: itemDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class itemDetailPageRoutingModule { }
