
import retrieveData from './repository/retrieve';
import updateData from './repository/update';

export default async function increasePostCount(creatorId: string): Promise<void>
{
    const currentData = await retrieveData(creatorId);

    const updatedData = currentData.increasePostCount();

    return updateData(updatedData);
}
