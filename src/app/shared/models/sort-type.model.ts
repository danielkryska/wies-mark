export const DEFAULT_SORT_TYPE = 'popularityOfProducts';

export interface ISortTypeGroup {
    groupLabel: string;
    values: ISortType[];
}

export interface ISortType {
    label: string;
    value: ISortTypeValue;
}

export type ISortTypeValue = 'popularityOfSuppliers' 
    | 'popularityOfProducts'
    | 'priceLowest'
    | 'priceHighest'
    | 'dateLatest';