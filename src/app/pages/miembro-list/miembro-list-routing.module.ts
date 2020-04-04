import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { miembroListPage } from './miembro-list';
const routes: Routes = [
  {
    path: '',
    component: miembroListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class miembroListPageRoutingModule {}
