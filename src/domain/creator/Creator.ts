
export default class Creator
{
    #id: string;
    #fullName: string;
    #nickName: string;
    #email: string;
    #portrait: string | undefined;

    constructor(id: string, fullName: string, nickName: string, email: string, portrait?: string)
    {
        this.#id = id;
        this.#fullName = fullName;
        this.#nickName = nickName;
        this.#email = email;
        this.#portrait = portrait;
    }

    get id() { return this.#id; }

    get fullName() { return this.#fullName; }

    get nickName() { return this.#nickName; }

    get email() { return this.#email; }

    get portrait() { return this.#portrait; }
}
