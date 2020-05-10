import { IPublicSupplier } from './supplier.model';
import { IOpinion } from './opinion.model';
import { IPhoto } from './photo.model';

export interface IProduct {
    // Information's
    title: string;
    price: number;
    currency: string;
    unit: string;
    category: string;
    supplier: IPublicSupplier;
    photos: IPhoto[];
    isEco: boolean;
    description?: string;

    // Feedback
    averageOfRates: number;
    opinionsCount: number;
    opinions?: IOpinion[];

    // For this specific user
    isFavorite: boolean;
    inBasket: boolean;
}