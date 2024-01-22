
import Creator from '../creator/Creator';
import Comic from '../comic/Comic';
import Comment from '../comment/Comment';

import ReactionData from './ReactionData';

export default class Reaction extends ReactionData
{
    #creator: Creator;
    #comic: Comic | undefined;
    #comment: Comment | undefined;

    constructor(data: ReactionData, creator: Creator, comic: Comic | undefined, comment: Comment | undefined)
    {
        super(data.id, data.creatorId, data.comicId, data.commentId, data.ratingCount, data.createdAt);

        this.#creator = creator;
        this.#comic = comic;
        this.#comment = comment;
    }

    get creator() { return this.#creator; }

    get comic() { return this.#comic; }

    get comment() { return this.#comment; }
}
