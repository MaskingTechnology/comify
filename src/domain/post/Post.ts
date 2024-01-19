
import Creator from '../creator/Creator';
import Comic from '../comic/Comic';

import PostData from './PostData';

export default class Post extends PostData
{
    #creator: Creator;
    #comic: Comic;

    constructor(data: PostData, creator: Creator, comic: Comic)
    {
        super(data.id, data.creatorId, data.comicId, data.createdAt, data.ratingCount, data.reactionCount);

        this.#creator = creator;
        this.#comic = comic;
    }

    get creator() { return this.#creator; }

    get comic() { return this.#comic; }
}
