
import { Types } from '../definitions';
import create from '../_create';

export default async function run(followerId: string, followingId: string): Promise<void>
{
    return create(Types.STARTED_FOLLOWING, followerId, followingId);
}
