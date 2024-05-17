
import retrieveData from './repository/retrieve';
import updateData from './repository/update';

export default async function decreaseFollowingCount(creatorId: string): Promise<void>
{
    const currentData = await retrieveData(creatorId);

    const updatedData = currentData.decreaseFollowingCount();

    return updateData(updatedData);
}
