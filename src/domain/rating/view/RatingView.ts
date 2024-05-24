
import type CreatorView from '^/domain/creator/view/CreatorView';
import { AggregatedData as PostView } from '^/domain/post/aggregate/feature';
import type ReactionView from '^/domain/reaction/view/ReactionView';

export default class RatingView
{
    #id: string;
    #createdAt: Date;
    #creator: CreatorView;
    #post: PostView | undefined;
    #reaction: ReactionView | undefined;

    constructor(id: string, createdAt: Date, creator: CreatorView, post: PostView | undefined, reaction: ReactionView | undefined)
    {
        this.#id = id;
        this.#createdAt = createdAt;
        this.#creator = creator;
        this.#post = post;
        this.#reaction = reaction;
    }

    get id() { return this.#id; }

    get creator() { return this.#creator; }

    get createdAt() { return this.#createdAt; }

    get post() { return this.#post; }

    get reaction() { return this.#reaction; }
}
