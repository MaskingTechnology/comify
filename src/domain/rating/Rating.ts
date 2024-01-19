
import Comic from '../comic/Comic';
import Comment from '../comment/Comment';

import ReactionData from './RatingData';

export default class Rating extends ReactionData
{
    #comic: Comic | undefined;
    #comment: Comment | undefined;

    constructor(data: ReactionData, comic: Comic | undefined, comment: Comment | undefined)
    {
        super(data.id, data.creatorId, data.comicId, data.commentId, data.createdAt);

        this.#comic = comic;
        this.#comment = comment;
    }

    get comic() { return this.#comic; }

    get comment() { return this.#comment; }
}
