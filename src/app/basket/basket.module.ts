import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketRoutingModule } from './basket-routing.module';
import { BasketComponent } from './basket.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [BasketComponent],
  imports: [
    IonicModule,
    CommonModule,
    BasketRoutingModule,
    FormsModule
  ]
})
export class BasketModule { }
