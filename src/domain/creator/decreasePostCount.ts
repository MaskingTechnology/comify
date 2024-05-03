
import retrieveData from './data/retrieve';
import updateData from './data/update';

export default async function decreasePostCount(creatorId: string): Promise<void>
{
    const currentData = await retrieveData(creatorId);

    const updatedData = currentData.decreasePostCount();

    return updateData(updatedData);
}
