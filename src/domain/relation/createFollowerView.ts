
import getCreatorView from '../creator/get';

import type RelationData from './data/RelationData';
import RelationView from './RelationView';

export default async function createFollowingView(data: RelationData): Promise<RelationView>
{
    const followerView = await getCreatorView(data.followerId);

    return new RelationView(data.id, followerView, undefined);
}
