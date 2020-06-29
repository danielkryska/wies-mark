import { IPublicUser } from './user.model';

export interface IComment {
  user: IPublicUser;
  rate: number;
  creationDate: Date;
  updateDate?: Date;
  comment: string;
}
