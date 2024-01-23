
import RelationData from './RelationData';

export default async function retrieveData(id: string): Promise<RelationData>
{
    return new RelationData(id, '0', '1');
}
