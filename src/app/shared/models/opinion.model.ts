import { IPublicUser } from './user.model';

export interface IOpinion {
    user: IPublicUser;
    rate: number;
    creationDate: Date;
    updateDate?: Date;
}