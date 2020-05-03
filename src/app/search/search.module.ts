import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { FiltersComponent } from './filters/filters.component';
import { SortByComponent } from './sort-by/sort-by.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    SearchComponent,
    FiltersComponent,
    SortByComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    SearchRoutingModule,
    SharedModule
  ]
})
export class SearchModule { }
