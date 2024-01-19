
export default class ReactionData
{
    #id: string;
    #creatorId: string;

    #comicId: string | undefined;
    #commentId: string | undefined;

    #ratingCount: number;

    constructor(id: string, creatorId: string, comicId: string | undefined, commentId: string | undefined, ratingCount = 0)
    {
        this.#id = id;
        this.#creatorId = creatorId;

        this.#comicId = comicId;
        this.#commentId = commentId;

        this.#ratingCount = ratingCount;
    }

    get id() { return this.#id; }

    get creatorId() { return this.#creatorId; }

    get comicId() { return this.#comicId; }

    get commentId() { return this.#commentId; }

    get ratingCount() { return this.#ratingCount; }
}
