import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { CountdownTimerModule } from 'ngx-countdown-timer'; //Para el contador principal

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CountdownTimerModule.forRoot(),
    RouterModule.forChild([{ path: '', component: HomePage }])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
