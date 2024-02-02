
export default class Requester
{
    #id: string;
    #fullName: string;
    #nickname: string;

    public constructor(id: string, fullName: string, nickname: string)
    {
        this.#id = id;
        this.#fullName = fullName;
        this.#nickname = nickname;
    }

    public get id() { return this.#id; }

    public get fullName() { return this.#fullName; }

    public get nickname() { return this.#nickname; }
}
