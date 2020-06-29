import { IPublicSupplier } from './supplier.model';
import { IComment } from './opinion.model';
import { IPhoto } from './photo.model';

export interface IProduct {
  ID: string;

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
  opinions?: IComment[];

  // For this specific user
  isFavorite: boolean; // TODO Add isFavoriteSelectionDate to sort by it
  inBasket: boolean;
  orderDate: number;
}
