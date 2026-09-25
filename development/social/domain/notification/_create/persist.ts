
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';
import { logger } from '../integrations';

export default async function (record: Record): Promise<void>
{
    try
    {
        await database.createRecord<Record>(RECORD_TYPE, record);
    }
    catch (error)
    {
        // We want the notification system to be non-blocking.
        logger.error('Failed to create notification', error);
    }
}
