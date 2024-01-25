
export default class RatingData
{
    #id: string;
    #creatorId: string;

    #postId: string | undefined;
    #reactionId: string | undefined;

    #createdAt: Date;

    constructor(id: string, creatorId: string, postId: string | undefined, reactionId: string | undefined, createdAt = new Date())
    {
        this.#id = id;
        this.#creatorId = creatorId;
        this.#postId = postId;
        this.#reactionId = reactionId;

        this.#createdAt = createdAt;
    }

    get id() { return this.#id; }

    get creatorId() { return this.#creatorId; }

    get postId() { return this.#postId; }

    get reactionId() { return this.#reactionId; }

    get createdAt() { return this.#createdAt; }
}
