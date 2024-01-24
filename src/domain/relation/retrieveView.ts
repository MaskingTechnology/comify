
import type RelationView from './RelationView';
import retrieveData from './retrieveData';
import createView from './createView';

export default async function retrieveView(id: string): Promise<RelationView>
{
    const data = await retrieveData(id);

    return createView(data);
}
