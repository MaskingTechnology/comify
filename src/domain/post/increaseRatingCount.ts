
import retrieveData from './repository/retrieve';
import updateData from './repository/update';

export default async function increaseRatingCount(postId: string): Promise<number>
{
    const currentData = await retrieveData(postId);

    const updatedData = currentData.increaseRatingCount();

    await updateData(updatedData);

    return updatedData.ratingCount;
}
