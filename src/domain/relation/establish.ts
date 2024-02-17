
import RelationData from './data/RelationData';
import create from './data/create.js';
import exists from './data/exists';
import relationAlreadyExists from './errors/relationAlreadyExists.js';

export default async function establish(followerId: string, followingId: string): Promise<RelationData>
{
    if (await exists(followerId, followingId))
    {
        throw new relationAlreadyExists();
    }

    return create(followerId, followingId);
}
