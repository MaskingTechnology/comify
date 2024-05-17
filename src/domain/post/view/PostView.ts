
import type ComicView from '../../comic/view/ComicView';
import type RelationView from '../../relation/view/RelationView';

export default class PostView
{
    #id: string;
    #createdAt: Date;
    #creator: RelationView;
    #comic: ComicView;
    #ratingCount: number;
    #reactionCount: number;
    #hasRated: boolean;

    constructor(id: string, createdAt: Date, creator: RelationView, comic: ComicView, ratingCount: number, reactionCount: number, hasRated: boolean)
    {
        this.#id = id;
        this.#createdAt = createdAt;
        this.#creator = creator;
        this.#comic = comic;
        this.#ratingCount = ratingCount;
        this.#reactionCount = reactionCount;
        this.#hasRated = hasRated;
    }

    get id() { return this.#id; }

    get createdAt() { return this.#createdAt; }

    get creator() { return this.#creator; }

    get comic() { return this.#comic; }

    get ratingCount() { return this.#ratingCount; }

    get reactionCount() { return this.#reactionCount; }

    get hasRated() { return this.#hasRated; }
}
