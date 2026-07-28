
import { type RelationKey } from '../definitions';

import retrieve from './retrieve';

export default async function run(key: RelationKey): Promise<boolean>
{
    const record = await retrieve(key.followerId, key.followingId);

    return record !== undefined;
}
