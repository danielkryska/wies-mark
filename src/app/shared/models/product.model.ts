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
    currency: string;
    unit: string;
    category: ICategory;
    photos: IPhoto[];
    isFavorite: boolean; // For this specific user
    description: string;
    supplier: IMarketSupplier;
    composition?: ICategory[];
    storageMethods?: any[];
    opinions?: IOpinion[];
    inBasket?: boolean;
    // TODO Storage methods
}