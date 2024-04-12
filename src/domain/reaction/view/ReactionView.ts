
import type ComicView from '../../comic/view/ComicView';
import type CommentView from '../../comment/view/CommentView';
import type CreatorView from '../../creator/view/CreatorView';

export default class ReactionView
{
    #id: string;
    #createdAt: Date;
    #creator: CreatorView;
    #ratingCount: number;
    #comic: ComicView | undefined;
    #comment: CommentView | undefined;
    #hasRated: boolean;

    constructor(id: string, createdAt: Date, creator: CreatorView, ratingCount: number, hasRated: boolean, comic?: ComicView, comment?: CommentView)
    {
        this.#id = id;
        this.#createdAt = createdAt;
        this.#creator = creator;
        this.#ratingCount = ratingCount;
        this.#comic = comic;
        this.#comment = comment;
        this.#hasRated = hasRated;
    }

    get id() { return this.#id; }

    get creator() { return this.#creator; }

    get createdAt() { return this.#createdAt; }

    get ratingCount() { return this.#ratingCount; }

    get comic() { return this.#comic; }

    get comment() { return this.#comment; }

    get hasRated() { return this.#hasRated; }
}
