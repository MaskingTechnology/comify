
import { type Record } from '../definitions';

import retrieve from './retrieve';

export default async function run(followerId: string, followingId: string): Promise<Record>
{
    const record = await retrieve(followerId, followingId);

    return record ?? { id: undefined, followerId, followingId, };
}
