
import retrieveData from './data/retrieve';
import updateData from './data/update';

export default async function increaseFollowingCount(creatorId: string): Promise<number>
{
    const currentData = await retrieveData(creatorId);

    const updatedData = currentData.increaseFollowingCount();

    await updateData(updatedData);

    return updatedData.followingCount;
}
