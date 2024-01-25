
import getImageView from '../image/get';

import type CreatorData from './data/CreatorData';
import CreatorView from './CreatorView';

export default async function createView(data: CreatorData): Promise<CreatorView>
{
    const portraitView = await getImageView(data.portraitId);

    return new CreatorView(data.id, data.fullName, data.nickName, portraitView, data.joinedAt, data.postCount, data.followerCount, data.followingCount);
}
