
import getCreatorView from '^/domain/creator/get';

import type RelationData from '../data/RelationData';
import RelationView from './RelationView';

export default async function createView(data: RelationData): Promise<RelationView>
{
    const followingView = await getCreatorView(data.followingId);

    const self = data.followerId === data.followingId;

    return new RelationView(data.id, followingView, self);
}
