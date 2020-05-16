import { ICity } from './city.model';

export interface IPublicUser extends Partial<IUser> {
    id: string;

    // TODO name and forenam replace with nick
    name: string;
    forename: string;
}

export const USER_CITY_FIELD = 'userCityField';
export interface IUser {
    id: string;
    nick: string;
    name: string;
    forename: string;
    postCode: string;
    city: ICity;
    email: string;
    phone: number;
}