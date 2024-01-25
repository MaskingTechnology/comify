
import retrieveImageView from '../image/retrieveView';

import type CreatorData from './CreatorData.js';
import CreatorView from './CreatorView.js';

export default async function createView(data: CreatorData): Promise<CreatorView>
{
    const portraitView = await retrieveImageView(data.portraitId);

    return new CreatorView(data.id, data.fullName, data.nickName, portraitView, data.joinedAt, data.postCount, data.followerCount, data.followingCount);
}
