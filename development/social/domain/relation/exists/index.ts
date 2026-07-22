
import retrieve from './retrieve';

export default async function run(followerId: string, followingId: string): Promise<boolean>
{
    const record = await retrieve(followerId, followingId);

    return record !== undefined;
}
