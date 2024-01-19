
export default class PostData
{
    #id: string;
    #creatorId: string;
    #comicId: string;

    #createdAt: Date;

    #ratingCount: number;
    #reactionCount: number;

    constructor(id: string, creatorId: string, comicId: string, createdAt = new Date(), ratingCount = 0, reactionCount = 0)
    {
        this.#id = id;
        this.#creatorId = creatorId;
        this.#comicId = comicId;

        this.#createdAt = createdAt;

        this.#ratingCount = ratingCount;
        this.#reactionCount = reactionCount;
    }

    get id() { return this.#id; }

    get creatorId() { return this.#creatorId; }

    get comicId() { return this.#comicId; }

    get createdAt() { return this.#createdAt; }

    get ratingCount() { return this.#ratingCount; }

    get reactionCount() { return this.#reactionCount; }
}
