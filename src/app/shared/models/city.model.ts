export interface IRegion {
    name: string;
    cities: ICity[];
}

export interface ICity {
    id: number;
    name: string;
    fullName: string;
    county: string;
    region: string;
    lon: number;
    lat: number;
    zoom: number;
    url: string;
    districts: any[];
}
