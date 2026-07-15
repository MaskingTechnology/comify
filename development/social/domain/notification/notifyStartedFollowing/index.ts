
import create from '../_create';
import { Types } from '../definitions';

export default async function run(followerId: string, followingId: string): Promise<void>
{
    return create(Types.STARTED_FOLLOWING, followerId, followingId);
}
