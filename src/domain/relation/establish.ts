
import RelationData from './data/RelationData';
import create from './data/create';
import exists from './data/exists';
import RelationAlreadyExists from './errors/RelationAlreadyExists';

export default async function establish(followerId: string, followingId: string): Promise<RelationData>
{
    if (await exists(followerId, followingId))
    {
        throw new RelationAlreadyExists();
    }

    return create(followerId, followingId);
}
