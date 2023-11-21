
export default class Creator
{
    #id: string;
    #fullName: string;
    #nickName: string;
    #portrait: string;
    #email: string;

    constructor(id: string, fullName: string, nickName: string, portrait: string, email: string)
    {
        this.#id = id;
        this.#fullName = fullName;
        this.#nickName = nickName;
        this.#portrait = portrait;
        this.#email = email;
    }

    get id() { return this.#id; }

    get fullName() { return this.#fullName; }

    get nickName() { return this.#nickName; }

    get portrait() { return this.#portrait; }

    get email() { return this.#email; }
}
