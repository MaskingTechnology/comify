
import CreatorView from '../creator/CreatorView';
import ComicView from '../comic/ComicView';

export default class PostView
{
    #id: string;
    #createdAt: Date;
    #creator: CreatorView;
    #comic: ComicView;
    #ratingCount: number;
    #reactionCount: number;

    constructor(id: string, createdAt: Date, creator: CreatorView, comic: ComicView, ratingCount: number, reactionCount: number)
    {
        this.#id = id;
        this.#createdAt = createdAt;
        this.#creator = creator;
        this.#comic = comic;
        this.#ratingCount = ratingCount;
        this.#reactionCount = reactionCount;
    }

    get id() { return this.#id; }

    get createdAt() { return this.#createdAt; }

    get creator() { return this.#creator; }

    get comic() { return this.#comic; }

    get ratingCount() { return this.#ratingCount; }

    get reactionCount() { return this.#reactionCount; }
}
