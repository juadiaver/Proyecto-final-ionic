import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PideAyudaPageRoutingModule } from './pide-ayuda-routing.module';

import { PideAyudaPage } from './pide-ayuda.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PideAyudaPageRoutingModule,
    ComponentesModule
  ],
  declarations: [PideAyudaPage]
})
export class PideAyudaPageModule {}
