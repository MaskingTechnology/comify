
import { type CreateData } from './definitions';
import { logger } from '../integrations';

import createRecord from './createRecord';
import persist from './persist';
import publish from './publish';
import validate from './validate';
import erase from './erase';

export default async function run(data: CreateData): Promise<string>
{
    validate(data);

    const record = createRecord(data.tenantId, data.creatorId, data.comicId, data.commentId, data.parentId);

    const postId = await persist(record);

    try
    {
        await publish(data.tenantId, data.creatorId, postId);

        return postId;
    }
    catch (error)
    {
        logger.error('Failed to create post', error);

        await erase(postId);

        throw error;
    }
}
