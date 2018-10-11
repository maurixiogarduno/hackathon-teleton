import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PagoPage } from './pago.page';

import {CardModule} from 'ngx-card/ngx-card'; //UI Payment Card

const routes: Routes = [
  {
    path: '',
    component: PagoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PagoPage]
})
export class PagoPageModule {}
