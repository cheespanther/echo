import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { miembroDetailPage } from './miembro-detail';

const routes: Routes = [
  {
    path: '',
    component: miembroDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class miembroDetailPageRoutingModule { }
