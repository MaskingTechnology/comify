
import Image from '../image/Image';

import CreatorData from './CreatorData';

export default class Creator extends CreatorData
{
    #portrait: Image;

    constructor(data: CreatorData, portrait: Image)
    {
        super(data.id, data.fullName, data.nickName, data.email, data.portraitId, data.joinedAt, data.popularity, data.comicCount, data.followerCount, data.followingCount);

        this.#portrait = portrait;
    }

    get portrait() { return this.#portrait; }
}
