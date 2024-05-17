
import retrieveData from './repository/retrieve';
import updateData from './repository/update';

export default async function increaseFollowingCount(creatorId: string): Promise<number>
{
    const currentData = await retrieveData(creatorId);

    const updatedData = currentData.increaseFollowingCount();

    await updateData(updatedData);

    return updatedData.followingCount;
}
