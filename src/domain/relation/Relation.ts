
export default class Relation
{
    #id: string;
    #followerId: string;  //CreatorId
    #followeeId: string;  //CreatorId  

    constructor(id: string, followerId: string, followeeId: string)
    {
        this.#id = id;
        this.#followerId = followerId;
        this.#followeeId = followeeId;
    }

    get id() { return this.#id; }

    get follower() { return this.#followerId; }

    get followee() { return this.#followeeId; }
}
