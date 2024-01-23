
import retrieveImage from '../image/retrieve';
import createImageView from '../image/createView';

import CreatorData from './CreatorData.js';
import CreatorView from './CreatorView.js';

export default async function createView(data: CreatorData): Promise<CreatorView>
{
    const portrait = await retrieveImage(data.portraitId);
    const portraitView = await createImageView(portrait);

    return new CreatorView(data.id, data.fullName, data.nickName, portraitView, data.joinedAt, data.comicCount, data.followerCount, data.followingCount);
}
