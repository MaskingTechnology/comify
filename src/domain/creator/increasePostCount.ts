
import retrieveData from './data/retrieve';
import updateData from './data/update';

export default async function increasePostCount(creatorId: string): Promise<void>
{
    const currentData = await retrieveData(creatorId);

    const updatedData = currentData.increasePostCount();

    return updateData(updatedData);
}
