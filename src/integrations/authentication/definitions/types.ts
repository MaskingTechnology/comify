
export type Identity = {
    name: string;
    nickname: string;
    picture: string | undefined;
    email: string;
    email_verified: boolean;
};

export type Token = string;

export type Session = {
    identity: Identity;
    accessToken: Token;
    refreshToken: Token;
    expires: Date;
};
