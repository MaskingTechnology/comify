
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

    increasePostCount(): CreatorData
    {
        return this.#mutate({ postCount: this.postCount + 1 });
    }

    decreasePostCount(): CreatorData
    {
        return this.#mutate({ postCount: this.postCount - 1 });
    }

    increaseFollowerCount(): CreatorData
    {
        return this.#mutate({ followerCount: this.followerCount + 1 });
    }

    decreaseFollowerCount(): CreatorData
    {
        return this.#mutate({ followerCount: this.followerCount - 1 });
    }

    increaseFollowingCount(): CreatorData
    {
        return this.#mutate({ followingCount: this.followingCount + 1 });
    }

    decreaseFollowingCount(): CreatorData
    {
        return this.#mutate({ followingCount: this.followingCount - 1 });
    }

    updateEmail(email: string): CreatorData
    {
        return this.#mutate({ email });
    }

    #mutate(values: Partial<CreatorData>)
    {
        return new CreatorData(
            values.id ?? this.id,
            values.fullName ?? this.fullName,
            values.nickname ?? this.nickname,
            values.email ?? this.email,
            values.portraitId ?? this.portraitId,
            values.joinedAt ?? this.joinedAt,
            values.popularity ?? this.popularity,
            values.postCount ?? this.postCount,
            values.followerCount ?? this.followerCount,
            values.followingCount ?? this.followingCount
        );
    }
}
