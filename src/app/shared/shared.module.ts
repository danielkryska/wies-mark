import { RouterModule } from '@angular/router';
import { SortTypesService } from './services/sort-types.service';
import { BarRatingModule } from 'ngx-bar-rating';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsService } from './services/products.service';
import { CitiesService } from './services/cities.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesBarComponent } from './components/categories-bar/categories-bar.component';
import { IonicModule } from '@ionic/angular';
import { ProductsSectionComponent } from './components/products-section/products-section.component';
import { ModalComponent } from './components/modal/modal.component';
import { MessageComponent } from './components/message/message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const SERVICES = [
  CitiesService,
  ProductsService,
  SortTypesService
];

const COMPONENTS = [
  CategoriesBarComponent,
  CategoriesComponent,
  ProductsSectionComponent,
  ModalComponent,
  MessageComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  providers: [...SERVICES],
  entryComponents: [...COMPONENTS],
  imports: [
    IonicModule,
    CommonModule,
    HttpClientModule,
    BarRatingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [...COMPONENTS]
})
export class SharedModule { }
