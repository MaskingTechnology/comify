
import getCreatorView from '../creator/get';

import type RelationData from './data/RelationData';
import RelationView from './RelationView';

export default async function createFollowingView(data: RelationData): Promise<RelationView>
{
    const followingView = await getCreatorView(data.followingId);

    return new RelationView(data.id, undefined, followingView);
}
