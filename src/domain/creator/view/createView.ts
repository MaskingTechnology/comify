
import getImageView from '../../image/get/feature';
import type CreatorData from '../data/CreatorData';
import CreatorView from './CreatorView';

export default async function createView(data: CreatorData): Promise<CreatorView>
{
    const portraitView = data.portraitId !== undefined
        ? await getImageView(data.portraitId)
        : undefined;

    return new CreatorView(data.id, data.fullName, data.nickname, portraitView, data.joinedAt, data.postCount, data.followerCount, data.followingCount);
}
