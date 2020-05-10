export interface ICategory {
    ID: string;
    label: string;
    value: string;
}

export interface ICategoryTree extends ICategory {
    children?: ICategoryTree[];
    isLeaf: boolean;
}