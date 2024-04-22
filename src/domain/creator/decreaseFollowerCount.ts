
import retrieveData from './data/retrieve';
import updateData from './data/update';

export default async function decreaseFollowerCount(creatorId: string): Promise<void>
{
    const currentData = await retrieveData(creatorId);

    const updatedData = currentData.decreaseFollowerCount();

    return updateData(updatedData);
}
