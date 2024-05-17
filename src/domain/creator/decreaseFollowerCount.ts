
import retrieveData from './repository/retrieve';
import updateData from './repository/update';

export default async function decreaseFollowerCount(creatorId: string): Promise<void>
{
    const currentData = await retrieveData(creatorId);

    const updatedData = currentData.decreaseFollowerCount();

    return updateData(updatedData);
}
