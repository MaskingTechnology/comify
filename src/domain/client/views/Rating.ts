
import Comic from './Comic';
import Comment from './Comment';
import Creator from './Creator';

export default class Rating
{
    #id: string;
    #createdAt: Date;
    #creator: Creator;
    #comic: Comic | undefined;
    #comment: Comment | undefined;

    constructor(id: string, createdAt: Date, creator: Creator, comic?: Comic, comment?: Comment)
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
