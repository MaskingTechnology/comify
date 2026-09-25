
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';
import { logger } from '../integrations';

export default async function (postId: string, relatedIds: string[]): Promise<void>
{
    const result = await database.updateRecords<Record>(RECORD_TYPE, { id: { IN: relatedIds } }, { deleted: true });

    if (result.noChanges)
    {
        logger.warn(`Not all notifications for post with id '${postId}' have been deleted.`);
    }
}
