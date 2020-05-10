import { IUser, IPublicUser } from './user.model';
import { ICategory } from './category.model';

export interface IPublicSupplier extends IPublicUser {
    averageOfRates: number;
    opinionsCount: number;
}

export interface ISupplier extends IUser {
    productsCategories: ICategory[];
    averageOfRates: number;
    opinionsCount: number;
    // TODO upgrade supplier
}