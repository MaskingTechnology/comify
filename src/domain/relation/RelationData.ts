
export default class RelationData
{
    #id: string;
    #followerId: string;
    #followingId: string;

    constructor(id: string, followerId: string, followingId: string)
    {
        this.#id = id;
        this.#followerId = followerId;
        this.#followingId = followingId;
    }

    get id() { return this.#id; }

    get followerId() { return this.#followerId; }

    get followingId() { return this.#followingId; }
}
