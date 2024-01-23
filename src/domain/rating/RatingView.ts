
import ComicView from '../comic/ComicView';
import CommentView from '../comment/CommentView';
import CreatorView from '../creator/CreatorView';

export default class RatingView
{
    #id: string;
    #createdAt: Date;
    #creator: CreatorView;
    #comic: ComicView | undefined;
    #comment: CommentView | undefined;

    constructor(id: string, createdAt: Date, creator: CreatorView, comic?: ComicView, comment?: CommentView)
    {
        this.#id = id;
        this.#createdAt = createdAt;
        this.#creator = creator;
        this.#comic = comic;
        this.#comment = comment;
    }

    get id() { return this.#id; }

    get creator() { return this.#creator; }

    get createdAt() { return this.#createdAt; }

    get comic() { return this.#comic; }

    get comment() { return this.#comment; }
}
