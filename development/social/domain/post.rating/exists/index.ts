
import retrieve from './retrieve';

export default async function run(creatorId: string, postId: string): Promise<boolean>
{
    const record = await retrieve(creatorId, postId);

    return record !== undefined;
}
