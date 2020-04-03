import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { configuracionPage } from './configuracion';

const routes: Routes = [
  {
    path: '',
    component: configuracionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class configuracionPageRoutingModule { }
