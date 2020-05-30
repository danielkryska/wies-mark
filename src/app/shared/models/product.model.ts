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
  isAvailable: boolean;
  opinions?: IOpinion[];

  // For this specific user
  isFavorite: boolean; // TODO Add isFavoriteSelectionDate to sort by it
  inBasket: boolean;
  orderDate: number;
}
