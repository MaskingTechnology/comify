
import { type FullName, type Nickname, type Email } from '../definitions';

export type CreateData = {
    readonly fullName: FullName;
    readonly nickname: Nickname;
    readonly email: Email;
    readonly portraitUrl?: URL;
};
