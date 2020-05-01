import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, reduce, filter } from 'rxjs/operators';
import { ICity } from '@shared/models/city.model';
import { environment } from '@environment';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  constructor(private _http: HttpClient) {}

  getCitiesBy(cityPartialName: string): Promise<ICity[]> {
    return this._http.get<any>(`${environment.API_URL}/cities`)
      .pipe(
        map(regions => regions
          .map(region => region.cities
            .map((city: any) => ({
              id: city.id,
              name: city.text_simple,
              fullName: city.text,
              county: city.text_gray,
              region: region.name,
              lon: city.lon,
              lat: city.lat,
              zoom: city.zoom,
              url: city.url,
              districts: city.districts
            }) as ICity)
          )
        ),
        map((regionsCities: ICity[][]) => regionsCities.reduce((acc, regionCities) => acc = [...acc, ...regionCities], [])),
        map((cities: ICity[]) => cities.filter((city: ICity) => city.name.toLowerCase().indexOf(cityPartialName.toLowerCase()) > -1))
      )
      .toPromise();
  }
}
