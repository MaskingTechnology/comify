
export type CreateData = {
    readonly fullName: string;
    readonly nickname: string;
    readonly email: string;
    readonly portraitUrl?: string;
};

export const MAX_NICKNAME_NUMBER = 1000;
