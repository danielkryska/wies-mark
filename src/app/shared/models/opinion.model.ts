import { IUser } from './user.model';

export interface IOpinion {
    user: Partial<IUser>;
    rate: number;
    creationDate: Date;
    updateDate: Date;
}