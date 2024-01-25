
import type RelationView from './RelationView';
import retrieveData from './retrieveData';
import createView from './createView';

export default async function retrieveView(followerId: string, followingId: string): Promise<RelationView>
{
    const data = await retrieveData(followerId, followingId);

    return createView(data);
}
