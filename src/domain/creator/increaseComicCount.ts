
import retrieve from './data/retrieve';

export default async function increaseComicCount(creatorId: string): Promise<void>
{
    const creator = await retrieve(creatorId);

}
