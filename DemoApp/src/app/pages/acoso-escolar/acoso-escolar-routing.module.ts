import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcosoEscolarPage } from './acoso-escolar.page';

const routes: Routes = [
  {
    path: '',
    component: AcosoEscolarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcosoEscolarPageRoutingModule {}
