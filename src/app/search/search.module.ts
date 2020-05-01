import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { FiltersComponent } from './filters/filters.component';
import { SortByComponent } from './sort-by/sort-by.component';
import { IonicModule } from '@ionic/angular';
import { CategoriesComponent } from './categories/categories.component';


@NgModule({
  declarations: [SearchComponent, FiltersComponent, SortByComponent, CategoriesComponent],
  imports: [
    IonicModule,
    CommonModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
