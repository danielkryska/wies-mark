import { ProductsService } from './services/products.service';
import { CitiesService } from './services/cities.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesBarComponent } from './components/categories-bar/categories-bar.component';

const SERVICES = [
  CitiesService,
  ProductsService
];

@NgModule({
  declarations: [CategoriesBarComponent],
  providers: [
    ...SERVICES
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [CategoriesBarComponent]
})
export class SharedModule { }
