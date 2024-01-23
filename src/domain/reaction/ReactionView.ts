
import type CreatorView from '../creator/CreatorView';
import type ComicView from '../comic/ComicView';
import type CommentView from '../comment/CommentView';

export default class ReactionView
{
    #id: string;
    #createdAt: Date;
    #creator: CreatorView;
    #ratingCount: number;
    #comic: ComicView | undefined;
    #comment: CommentView | undefined;

    constructor(id: string, createdAt: Date, creator: CreatorView, ratingCount: number, comic?: ComicView, comment?: CommentView)
    {
        this.#id = id;
        this.#createdAt = createdAt;
        this.#creator = creator;
        this.#ratingCount = ratingCount;
        this.#comic = comic;
        this.#comment = comment;
    }

    get id() { return this.#id; }

    get creator() { return this.#creator; }

    get createdAt() { return this.#createdAt; }

    get ratingCount() { return this.#ratingCount; }

    get comic() { return this.#comic; }

    get comment() { return this.#comment; }
}
