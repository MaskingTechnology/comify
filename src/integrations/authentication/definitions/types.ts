
export type Identity = {
    name: string;
    nickname: string | undefined;
    picture: string | undefined;
    email: string;
    email_verified: boolean;
};

export type Token = string;

export type Session = {
    key?: string;
    requester?: unknown;
    identity: Identity;
    accessToken: Token;
    refreshToken: Token;
    expires: Date;
};
