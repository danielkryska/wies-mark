import { IUser, IPublicUser } from './user.model';
import { ICategory } from './category.model';

export interface IMarketSupplier extends Partial<ISupplier> {
    id: string;
    name: string;
    forename: string;
    averageOfRates: number;
    opinionsCount: number;
    company?: string;
}

export interface ISupplier extends IUser {
    productsCategories: ICategory[];
    averageOfRates: number;
    opinionsCount: number;
    // TODO upgrade supplier
}