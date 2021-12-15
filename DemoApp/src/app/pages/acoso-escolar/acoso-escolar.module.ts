import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcosoEscolarPageRoutingModule } from './acoso-escolar-routing.module';

import { AcosoEscolarPage } from './acoso-escolar.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcosoEscolarPageRoutingModule,
    ComponentesModule
  ],
  declarations: [AcosoEscolarPage]
})
export class AcosoEscolarPageModule {}
