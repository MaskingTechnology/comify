
import retrieveImageData from '../image/retrieveData';
import createImageView from '../image/createView';

import type CreatorData from './CreatorData.js';
import CreatorView from './CreatorView.js';

export default async function createView(data: CreatorData): Promise<CreatorView>
{
    const portraitData = await retrieveImageData(data.portraitId);
    const portraitView = await createImageView(portraitData);

    return new CreatorView(data.id, data.fullName, data.nickName, portraitView, data.joinedAt, data.comicCount, data.followerCount, data.followingCount);
}
