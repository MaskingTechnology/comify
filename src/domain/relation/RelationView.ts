
import CreatorView from '../creator/CreatorView';

export default class RelationView
{
    // Relations are always requested by the follower id.
    // This means we don't need to add the follower as a field.

    #id: string;
    #following: CreatorView;

    constructor(id: string, following: CreatorView)
    {
        this.#id = id;
        this.#following = following;
    }

    get id() { return this.#id; }

    get following() { return this.#following; }
}
