
import type ComicView from '../../comic/view/ComicView';
import type CommentView from '../../comment/view/CommentView';
import type RelationView from '../../relation/view/RelationView';

export default class ReactionView
{
    #id: string;
    #createdAt: Date;
    #relation: RelationView;
    #ratingCount: number;
    #comic: ComicView | undefined;
    #comment: CommentView | undefined;
    #hasRated: boolean;

    constructor(id: string, createdAt: Date, relation: RelationView, ratingCount: number, hasRated: boolean, comic?: ComicView, comment?: CommentView)
    {
        this.#id = id;
        this.#createdAt = createdAt;
        this.#relation = relation;
        this.#ratingCount = ratingCount;
        this.#comic = comic;
        this.#comment = comment;
        this.#hasRated = hasRated;
    }

    get id() { return this.#id; }

    get relation() { return this.#relation; }

    get createdAt() { return this.#createdAt; }

    get ratingCount() { return this.#ratingCount; }

    get comic() { return this.#comic; }

    get comment() { return this.#comment; }

    get hasRated() { return this.#hasRated; }
}
