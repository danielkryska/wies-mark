import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISortTypeGroup } from '@shared/models/sort-type.model';
import { environment } from '@environment';

@Injectable({
  providedIn: 'root'
})
export class SortTypesService {
  public sortTypes: ISortTypeGroup[] = [];

  constructor(private _http: HttpClient) {
    this.sortTypes$.subscribe((sortTypes: ISortTypeGroup[]) => this.sortTypes = sortTypes);
  }

  get sortTypes$(): Observable<ISortTypeGroup[]> {
    return this._http.get<ISortTypeGroup[]>(`${environment.API_URL}/sortTypes`);
  }
}
