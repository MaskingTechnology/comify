
export default class CreatorData
{
    #id: string;

    #fullName: string;
    #nickname: string;
    #email: string;

    #portraitId: string | undefined;
    #joinedAt: Date;

    #popularity: number;
    #postCount: number;
    #followerCount: number;
    #followingCount: number;

    constructor(id: string, fullName: string, nickname: string, email: string, portraitId: string | undefined, joinedAt = new Date(), popularity = 0, postCount = 0, followerCount = 0, followingCount = 0)
    {
        this.#id = id;
        this.#fullName = fullName;
        this.#nickname = nickname;
        this.#email = email;

        this.#portraitId = portraitId;
        this.#joinedAt = joinedAt;

        this.#popularity = popularity;
        this.#postCount = postCount;
        this.#followerCount = followerCount;
        this.#followingCount = followingCount;
    }

    get id() { return this.#id; }

    get fullName() { return this.#fullName; }

    get nickname() { return this.#nickname; }

    get email() { return this.#email; }

    get portraitId() { return this.#portraitId; }

    get joinedAt() { return this.#joinedAt; }

    get popularity() { return this.#popularity; }

    get postCount() { return this.#postCount; }

    get followerCount() { return this.#followerCount; }

    get followingCount() { return this.#followingCount; }
}
