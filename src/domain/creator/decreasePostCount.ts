
import retrieveData from './repository/retrieve';
import updateData from './repository/update';

export default async function decreasePostCount(creatorId: string): Promise<number>
{
    const currentData = await retrieveData(creatorId);

    const updatedData = currentData.decreasePostCount();

    await updateData(updatedData);

    return updatedData.postCount;
}
