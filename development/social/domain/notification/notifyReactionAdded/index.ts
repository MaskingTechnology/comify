
import retrievePost from '~/post/_retrieveById';

import { Types } from '../definitions';
import create from '../_create';

export default async function (tenantId: string, postId: string, parentId?: string): Promise<void>
{
    if (parentId === undefined)
    {
        // Root posts are not reactions
        return;
    }

    const [postRecord, parentRecord] = await Promise.all([
        retrievePost(tenantId, postId),
        retrievePost(tenantId, parentId)
    ]);

    return create(Types.REACTED_TO_POST, postRecord.creatorId, parentRecord.creatorId, postId);
}
