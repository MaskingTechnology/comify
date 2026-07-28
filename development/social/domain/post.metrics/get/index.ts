
import type { Metrics } from '../definitions';
import retrieve from '../_retrieveByPost';
import toModel from '../_toModel';

export default async function (postId: string): Promise<Metrics>
{
    const record = await retrieve(postId);

    return toModel(record);
}
