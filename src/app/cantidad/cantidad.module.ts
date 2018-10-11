import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CantidadPage } from './cantidad.page';

import { NgxQRCodeModule } from 'ngx-qrcode2'; //Crea Códigos QR

const routes: Routes = [
  {
    path: '',
    component: CantidadPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxQRCodeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CantidadPage]
})
export class CantidadPageModule {}
