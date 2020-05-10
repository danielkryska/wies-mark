import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketRoutingModule } from './basket-routing.module';
import { BasketComponent } from './basket.component';
import { FormsModule } from '@angular/forms';
import { BasketProductComponent } from './basket-product/basket-product.component';


@NgModule({
  declarations: [BasketComponent, BasketProductComponent],
  imports: [
    IonicModule,
    CommonModule,
    BasketRoutingModule,
    FormsModule
  ]
})
export class BasketModule { }
