
import retrieveData from './data/retrieve';
import updateData from './data/update';

export default async function increaseFollowerCount(creatorId: string): Promise<number>
{
    const currentData = await retrieveData(creatorId);

    const updatedData = currentData.increaseFollowerCount();

    await updateData(updatedData);

    return updatedData.followerCount;
}
