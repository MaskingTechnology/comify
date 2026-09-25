
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record, type RatingKey } from '../../definitions';
import { logger } from '../../integrations';

export default async function (key: RatingKey): Promise<void>
{
    const result = await database.deleteRecord<Record>(RECORD_TYPE, {
        creatorId: { EQUALS: key.creatorId },
        postId: { EQUALS: key.postId }
    });

    if (result.noChanges)
    {
        logger.warn(`Rating for post '${key.postId}' by creator '${key.creatorId}' has not been deleted.`);
    }
}
