
import type { FullName, Nickname, Email } from '../definitions';

export type CreateData = {
    readonly fullName: FullName;
    readonly nickname: Nickname;
    readonly email: Email;
    readonly portraitUrl?: URL;
};

export const MAX_NICKNAME_NUMBER = 1000;
