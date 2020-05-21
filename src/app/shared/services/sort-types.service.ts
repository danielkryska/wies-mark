import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISortTypeGroup } from '@shared/models/sort-type.model';
import { environment } from '@environment';

@Injectable({ providedIn: 'root' })
export class SortTypesService {
  public sortTypes: ISortTypeGroup[] = [];
  public get sortTypes$() {
    return this._http.get<ISortTypeGroup[]>(`${environment.API_URL}/sortTypes`);
  }

  constructor(private _http: HttpClient) {
    this.sortTypes$
      .subscribe((sortTypes: ISortTypeGroup[]) => this.sortTypes = sortTypes);
  }
}
