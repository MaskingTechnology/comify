
import retrieveCreatorData from '../creator/retrieveData';
import createCreatorView from '../creator/createView';

import RelationData from './RelationData';
import RelationView from './RelationView';

export default async function createView(data: RelationData): Promise<RelationView>
{
    const followingData = await retrieveCreatorData(data.followingId);
    const followingView = await createCreatorView(followingData);

    return new RelationView(data.id, followingView);
}
