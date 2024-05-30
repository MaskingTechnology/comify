
export default class ReactionData
{
    #id: string;
    #creatorId: string;
    #postId: string;

    #comicId: string | undefined;
    #commentId: string | undefined;

    #ratingCount: number;

    #createdAt: Date;

    constructor(id: string, creatorId: string, postId: string, comicId: string | undefined, commentId: string | undefined, ratingCount = 0, createdAt = new Date())
    {
        this.#id = id;
        this.#creatorId = creatorId;
        this.#postId = postId;

        this.#comicId = comicId;
        this.#commentId = commentId;

        this.#ratingCount = ratingCount;

        this.#createdAt = createdAt;
    }

    get id() { return this.#id; }

    get creatorId() { return this.#creatorId; }

    get postId() { return this.#postId; }

    get comicId() { return this.#comicId; }

    get commentId() { return this.#commentId; }

    get ratingCount() { return this.#ratingCount; }

    get createdAt() { return this.#createdAt; }

    increaseRatingCount(): ReactionData
    {
        return this.#mutate({ ratingCount: this.#ratingCount + 1 });
    }

    decreaseRatingCount(): ReactionData
    {
        return this.#mutate({ ratingCount: this.#ratingCount - 1 });
    }

    #mutate(values: Partial<ReactionData>)
    {
        return new ReactionData(
            values.id ?? this.#id,
            values.creatorId ?? this.#creatorId,
            values.postId ?? this.#postId,
            values.comicId ?? this.#comicId,
            values.commentId ?? this.#commentId,
            values.ratingCount ?? this.#ratingCount,
            values.createdAt ?? this.#createdAt
        );
    }
}
