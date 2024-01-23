
import type CreatorView from '../creator/CreatorView';

export default class RelationView
{
    #id: string | undefined;
    #creator: CreatorView;

    constructor(id: string | undefined, creator: CreatorView)
    {
        this.#id = id;
        this.#creator = creator;
    }

    get id() { return this.#id; }

    get creator() { return this.#creator; }

    get hasRelation() { return this.#id !== undefined; }
}
