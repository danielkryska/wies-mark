export interface ICategory {
  ID: string;
  label: string;
  value: string;

  // User data
  isFavorite?: boolean;
}

export interface ICategoryTree extends ICategory {
  children?: ICategoryTree[];
  isLeaf?: boolean;
}
