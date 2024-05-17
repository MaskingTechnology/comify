
import type CreatorView from '^/domain/creator/view/CreatorView';

export default class RelationView
{
    #id: string | undefined;
    #following: CreatorView;
    #self: boolean;

    constructor(id: string | undefined, following: CreatorView, self: boolean)
    {
        this.#id = id;
        this.#following = following;
        this.#self = self;
    }

    get id() { return this.#id; }

    get following() { return this.#following; }

    get exists() { return this.#id !== undefined; }

    get self() { return this.#self; }

}
