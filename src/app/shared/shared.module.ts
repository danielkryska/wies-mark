import { RouterModule } from '@angular/router';
import { BarRatingModule } from 'ngx-bar-rating';
import { CategoriesModalComponent } from './components/categories-modal/categories-modal.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesBarComponent } from './components/categories-bar/categories-bar.component';
import { IonicModule } from '@ionic/angular';
import { ProductsSectionComponent } from './components/products-section/products-section.component';
import { MessageComponent } from './components/message/message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutosizeModule } from 'ngx-autosize';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { ProductComponent } from './components/product/product.component';
import { NgxStarsModule } from 'ngx-stars';

const COMPONENTS = [
  CategoriesBarComponent,
  CategoriesModalComponent,
  ProductsSectionComponent,
  CategoriesListComponent,
  MessageComponent,
  ProductComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  entryComponents: [...COMPONENTS],
  imports: [
    IonicModule,
    CommonModule,
    HttpClientModule,
    BarRatingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AutosizeModule,
    NgxStarsModule
  ],
  exports: [...COMPONENTS]
})
export class SharedModule {}
