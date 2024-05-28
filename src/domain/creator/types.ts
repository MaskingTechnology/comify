
export type DataModel = {
    readonly id: string;
    readonly fullName: string;
    readonly nickname: string;
    readonly email: string;
    readonly portraitId?: string;
    readonly joinedAt: string;
    readonly postCount: number;
    readonly followerCount: number;
    readonly followingCount: number;
};

export type DataFields = Array<keyof DataModel>;
