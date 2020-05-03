export interface ICategory {
    // TODO Add UID (hash of category content)
    label: string;
    value: string;
    children?: ICategory[];
    isLeaf: boolean;
}