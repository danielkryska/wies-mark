export const DEFAULT_SORT_TYPE = 'popularityOfProducts';

export interface ISortType {
    groupLabel: string;
    values: ISortTypeValue[];
}

export interface ISortTypeValue {
    label: string;
    value: string;
}