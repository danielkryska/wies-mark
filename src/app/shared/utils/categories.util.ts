import { ICategoryTree } from './../models/category.model';
import { ICategory } from '@shared/models/category.model';

const isSearched = (category: ICategoryTree, categoryValue: string) => !!category && category.value === categoryValue;
export const hasChildren = (category: ICategoryTree) =>
  !!category && !!category.children && category.children.length > 0;
const hasSearchedChild = (category: ICategoryTree, categoryValue: string) =>
  hasChildren(category) &&
  category.children.some((childCategory: ICategoryTree) => childCategory.value === categoryValue);
const isParent = (category: ICategoryTree, categoryValue: string): boolean => hasSearchedChild(category, categoryValue);

const toChildren = (categories: ICategoryTree[]) =>
  categories
    .filter((category: ICategoryTree) => hasChildren(category))
    .map((category: ICategoryTree) => category.children)
    .reduce((accumulator, categoriesChildren) => (accumulator = [...accumulator, ...categoriesChildren]), []);

export const findCategoryInTree = (categoriesTrees: ICategoryTree[], categoryValue: string): ICategoryTree => {
  const searchedCategory = categoriesTrees.find((category: ICategoryTree) => isSearched(category, categoryValue));
  return (!!searchedCategory && searchedCategory) || findCategoryInTree(toChildren(categoriesTrees), categoryValue);
};
export const findParentCategoryInTree = (categoriesTrees: ICategoryTree[], categoryValue: string): ICategoryTree => {
  const parent = categoriesTrees.find((category: ICategoryTree) => isParent(category, categoryValue));
  return (!!parent && parent) || findParentCategoryInTree(toChildren(categoriesTrees), categoryValue);
};
export const flattenCategories = (...categories: ICategoryTree[]): ICategoryTree[] =>
  categories.reduce((acc, category) => {
    acc.push(category);
    if (!category.isLeaf) {
      acc.push(...flattenCategories(...category.children));
    }

    return acc;
  }, []);
export const isBelongingTo = (source: ICategoryTree, actual: ICategoryTree): boolean =>
  isSearched(source, actual.value) ||
  flattenCategories(source).some((flatCategory: ICategory) => flatCategory.value === actual.value);
