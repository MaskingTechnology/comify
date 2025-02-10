
type Identity = {
    name: string;
    nickname: string | undefined;
    picture: string | undefined;
    email: string;
    email_verified: boolean;
};

// eslint-disable-next-line sonarjs/redundant-type-aliases
type Token = string;

type Session = {
    key?: string;
    requester?: unknown;
    identity: Identity;
    accessToken: Token;
    refreshToken: Token;
    expires: Date;
};

export type { Identity, Session };
