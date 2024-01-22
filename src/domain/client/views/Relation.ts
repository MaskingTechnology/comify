
import Creator from './Creator';

export default class Relation
{
    // Relations are always requested by the follower id.
    // This means we don't need to add the follower as a field.

    #id: string;
    #following: Creator;

    constructor(id: string, following: Creator)
    {
        this.#id = id;
        this.#following = following;
    }

    get id() { return this.#id; }

    get following() { return this.#following; }
}
