import { ICategory } from './category.model';
import { IMarketSupplier } from './supplier.model';
import { IOpinion } from './opinion.model';
import { IPhoto } from './photo.model';

export interface IMarketProduct extends Partial<IProduct> {
    title: string;
    price: number;
    currency: string;
    unit: string;
    category: ICategory;
    photos: IPhoto[];
    isFavorite: boolean;
    supplier: IMarketSupplier;
    averageOfRates: number;
    opinionsCount: number;
    inBasket?: boolean;
}

export interface IProduct {
    title: string;
    price: number;
    unit: string;
    category: ICategory;
    photos: IPhoto[];
    isEcological: boolean;
    isFavorite: boolean; // For this specific user
    supplier: IMarketSupplier;
    currency: string;
    description?: string;
    opinions?: IOpinion[];
    inBasket?: boolean;
    // TODO Storage methods
}