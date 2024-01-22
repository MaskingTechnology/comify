
export default class Comment
{
    #id: string;
    #message: string;

    constructor(id: string, message: string)
    {
        this.#id = id;
        this.#message = message;
    }

    get id() { return this.#id; }

    get message() { return this.#message; }
}
