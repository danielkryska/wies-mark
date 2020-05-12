import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISortTypeGroup } from '@shared/models/sort-type.model';
import { environment } from '@environment';

@Injectable({
  providedIn: 'root'
})
export class SortTypesService {
  public sortTypes: ISortTypeGroup[] = [];

  constructor(private _http: HttpClient) {}

  loadSortTypes(): void {
    this._http.get<ISortTypeGroup[]>(`${environment.API_URL}/sortTypes`)
      .subscribe((sortTypes: ISortTypeGroup[]) => this.sortTypes = sortTypes);
  }
}
