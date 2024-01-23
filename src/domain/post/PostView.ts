
import type ComicView from '../comic/ComicView';
import type RelationView from '../relation/RelationView';

export default class PostView
{
    #id: string;
    #createdAt: Date;
    #relation: RelationView;
    #comic: ComicView;
    #ratingCount: number;
    #reactionCount: number;

    constructor(id: string, createdAt: Date, relation: RelationView, comic: ComicView, ratingCount: number, reactionCount: number)
    {
        this.#id = id;
        this.#createdAt = createdAt;
        this.#relation = relation;
        this.#comic = comic;
        this.#ratingCount = ratingCount;
        this.#reactionCount = reactionCount;
    }

    get id() { return this.#id; }

    get createdAt() { return this.#createdAt; }

    get relation() { return this.#relation; }

    get comic() { return this.#comic; }

    get ratingCount() { return this.#ratingCount; }

    get reactionCount() { return this.#reactionCount; }
}
