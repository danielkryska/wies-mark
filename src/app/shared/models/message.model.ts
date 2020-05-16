import { IPublicUser } from './user.model';
export interface IMessagesGroup {
    user: IPublicUser;
    title: string;
    messages: IMessage[];
}

export interface IMessage {
    creationDate: number;
    updateDate?: number;
    readDate?: number;

    isResponse?: boolean;

    content: string;
}