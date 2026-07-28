
import retrievePost from '~/post/_retrieveById';

import { Types } from '../definitions';
import create from '../_create';

export default async function (tenantId: string, creatorId: string, postId: string): Promise<void>
{
    const postRecord = await retrievePost(tenantId, postId);

    return create(Types.RATED_POST, creatorId, postRecord.creatorId, postId);
}
