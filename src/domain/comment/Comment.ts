
export default class Comment
{
    #id: string;
    #comment: string;

    constructor(id: string, comment: string)
    {
        this.#id = id;
        this.#comment = comment; 
    }

    get id() { return this.#id; }

    get comment() { return this.#comment; }
}
