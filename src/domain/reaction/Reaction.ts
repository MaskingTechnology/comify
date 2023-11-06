
export default class Reaction
{
    #id: string;
    #creatorId: string;
    #comicId: string;
    #commentId: string;

    constructor(id: string, creatorId: string, comicId: string, commentId: string)
    {
        this.#id = id;
        this.#creatorId = creatorId;
        this.#comicId = comicId;
        this.#commentId = commentId;
    }

    get id() { return this.#id; }

    get creatorId() { return this.#creatorId; }

    get comicId() { return this.#comicId; }

    get commentId() { return this.#commentId; }
}
