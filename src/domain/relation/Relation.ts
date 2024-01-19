
import Creator from '../creator/Creator';

import RelationData from './RelationData';

export default class Relation extends RelationData
{
    #follower: Creator;
    #following: Creator;

    constructor(data: RelationData, follower: Creator, following: Creator)
    {
        super(data.id, data.followerId, data.followingId);

        this.#follower = follower;
        this.#following = following;
    }

    get follower() { return this.#follower; }

    get following() { return this.#following; }
}
