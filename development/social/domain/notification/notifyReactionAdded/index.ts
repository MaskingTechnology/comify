
import retrievePost from '~/post/_retrieveById';

import { Types } from '../definitions';
import create from '../_create';

export default async function run(tenantId: string, postId: string): Promise<void>
{
    const postRecord = await retrievePost(tenantId, postId);

    if (postRecord.parentId === undefined)
    {
        // Root posts are not reactions
        return;
    }

    const parentRecord = await retrievePost(tenantId, postRecord.parentId);

    return create(Types.REACTED_TO_POST, postRecord.creatorId, parentRecord.creatorId, postId);
}
