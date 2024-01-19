
export default class RatingData
{
    #id: string;
    #creatorId: string;

    #comicId: string | undefined;
    #commentId: string | undefined;

    #createdAt: Date;

    constructor(id: string, creatorId: string, comicId: string | undefined, commentId: string | undefined, createdAt = new Date())
    {
        this.#id = id;
        this.#creatorId = creatorId;
        this.#comicId = comicId;
        this.#commentId = commentId;

        this.#createdAt = createdAt;
    }

    get id() { return this.#id; }

    get creatorId() { return this.#creatorId; }

    get comicId() { return this.#comicId; }

    get commentId() { return this.#commentId; }

    get createdAt() { return this.#createdAt; }
}
