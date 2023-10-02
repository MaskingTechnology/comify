
export default class Post
{
    #id: string;
    #creatorId: string;
    #title: string;
    #comic: string;

    constructor(id: string, creatorId: string, title: string, comic: string)
    {
        this.#id = id;
        this.#creatorId = creatorId;
        this.#title = title;
        this.#comic = comic;
    }

    get id() { return this.#id; }

    get creatorId() { return this.#creatorId; }

    get title() { return this.#title; }

    get comic() { return this.#comic; }
}
