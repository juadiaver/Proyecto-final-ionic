import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PideAyudaPage } from './pide-ayuda.page';

const routes: Routes = [
  {
    path: '',
    component: PideAyudaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PideAyudaPageRoutingModule {}
