import { ProductsService } from './services/products.service';
import { CitiesService } from './services/cities.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

const SERVICES = [
  CitiesService,
  ProductsService
];

@NgModule({
  declarations: [],
  providers: [
    ...SERVICES
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: []
})
export class SharedModule { }
