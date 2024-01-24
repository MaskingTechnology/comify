
import ImageView from '../image/ImageView';

export default class CreatorView
{
    #id: string;
    #fullName: string;
    #nickName: string;
    #portrait: ImageView;

    #joinedAt: Date;
    #comicCount: number;
    #followerCount: number;
    #followingCount: number;

    constructor(id: string, fullName: string, nickName: string, portrait: ImageView, joinedAt: Date, comicCount: number, followerCount: number, followingCount: number)
    {
        this.#id = id;
        this.#fullName = fullName;
        this.#nickName = nickName;
        this.#portrait = portrait;

        this.#joinedAt = joinedAt;
        this.#comicCount = comicCount;
        this.#followerCount = followerCount;
        this.#followingCount = followingCount;
    }

    get id() { return this.#id; }

    get fullName() { return this.#fullName; }

    get nickName() { return this.#nickName; }

    get portrait() { return this.#portrait; }

    get joinedAt() { return this.#joinedAt; }

    get comicCount() { return this.#comicCount; }

    get followerCount() { return this.#followerCount; }

    get followingCount() { return this.#followingCount; }
}
