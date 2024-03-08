
import type Requester from '../authentication/Requester';
import type RelationData from './data/RelationData';
import create from './data/create';
import exists from './data/exists';
import RelationAlreadyExists from './errors/RelationAlreadyExists';

export default async function establish(requester: Requester, followingId: string): Promise<RelationData>
{
    const relationExists = await exists(requester.id, followingId);

    if (relationExists)
    {
        throw new RelationAlreadyExists();
    }

    return create(requester.id, followingId);
}
