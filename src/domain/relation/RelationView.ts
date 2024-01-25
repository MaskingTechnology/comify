
import type CreatorView from '../creator/CreatorView';

export default class RelationView
{
    #id: string | undefined;
    #following: CreatorView;

    constructor(id: string | undefined, following: CreatorView)
    {
        this.#id = id;
        this.#following = following;
    }

    get id() { return this.#id; }

    get following() { return this.#following; }

    get exists() { return this.#id !== undefined; }
}
