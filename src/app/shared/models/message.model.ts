import { IPublicUser } from './user.model';
export interface IMessagesGroup {
    user: IPublicUser;
    messages: IMessage[];

    viewDate?: number;
}

export interface IMessage {
    creationDate: number;
    updateDate?: number;
    readDate?: number;

    isResponse?: boolean;
    isOffer?: boolean;

    content: string;
}