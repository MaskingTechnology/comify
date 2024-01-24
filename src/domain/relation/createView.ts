
import retrieveCreatorView from '../creator/retrieveView';

import type RelationData from './RelationData';
import RelationView from './RelationView';

export default async function createView(data: RelationData): Promise<RelationView>
{
    const followingView = await retrieveCreatorView(data.followingId);

    return new RelationView(data.id, followingView);
}
