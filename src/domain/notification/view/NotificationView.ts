
import type PostView from '^/domain/post/view/PostView';
import type ReactionView from '^/domain/reaction/view/ReactionView';
import type RelationView from '^/domain/relation/view/RelationView';

export default class NotificationView
{
    #id: string;
    #type: string;
    #relation: RelationView;
    #post: PostView | undefined;
    #reaction: ReactionView | undefined;
    #createdAt: Date;

    constructor(id: string, type: string, relation: RelationView, post: PostView | undefined, reaction: ReactionView | undefined, createdAt: Date)
    {
        this.#id = id;
        this.#type = type;
        this.#relation = relation;
        this.#post = post;
        this.#reaction = reaction;
        this.#createdAt = createdAt;
    }

    get id() { return this.#id; }

    get type() { return this.#type; }

    get relation() { return this.#relation; }

    get post() { return this.#post; }

    get reaction() { return this.#reaction; }

    get createdAt() { return this.#createdAt; }
}
