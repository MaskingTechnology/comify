
import type CreatorView from '../creator/CreatorView';

export default class RelationView
{
    #id: string | undefined;
    #follower: CreatorView | undefined;
    #following: CreatorView | undefined;

    constructor(id: string | undefined, follower: CreatorView | undefined, following: CreatorView | undefined)
    {
        this.#id = id;
        this.#follower = follower;
        this.#following = following;
    }

    get id() { return this.#id; }

    get follower() { return this.#follower; }

    get following() { return this.#following; }

    get exists() { return this.#id !== undefined; }

    get creator() { return this.#following ?? this.#follower as CreatorView; }
}
