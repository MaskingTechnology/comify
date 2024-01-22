
import Creator from './Creator';
import Comic from './Comic';
import Comment from './Comment';

export default class Reaction
{
    #id: string;
    #createdAt: Date;
    #creator: Creator;
    #ratingCount: number;
    #comic: Comic | undefined;
    #comment: Comment | undefined;

    constructor(id: string, createdAt: Date, creator: Creator, ratingCount: number, comic?: Comic, comment?: Comment)
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
