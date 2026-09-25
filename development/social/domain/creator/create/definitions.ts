
import { type FullName, type Nickname, type Email } from '../definitions';

export type CreateData = {
    readonly fullName: FullName;
    readonly nickname: Nickname;
    readonly email: Email;
    readonly portraitUrl?: URL;
};

export const portraitUrlValidation = {
    message: 'Value is an invalid URL',
    required: false,
    URL: { }
};
