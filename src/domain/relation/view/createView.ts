
import getCreatorView from '../../creator/get';

import type RelationData from '../data/RelationData';
import RelationView from './RelationView';

export default async function createView(data: RelationData): Promise<RelationView>
{
    const [followerView, followingView] = await Promise.all([
        getCreatorView(data.followerId),
        getCreatorView(data.followingId)
    ]);

    return new RelationView(data.id, followerView, followingView);
}
