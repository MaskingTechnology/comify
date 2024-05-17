
import retrieveData from './repository/retrieve';
import updateData from './repository/update';

export default async function increaseFollowerCount(creatorId: string): Promise<number>
{
    const currentData = await retrieveData(creatorId);

    const updatedData = currentData.increaseFollowerCount();

    await updateData(updatedData);

    return updatedData.followerCount;
}
