
import database from '@comify/common/integrations/database';
import logger from '@comify/common/integrations/logging';

import { RECORD_TYPE, type Record } from '../definitions';

export default async function run(id: string): Promise<void>
{
    const result = await database.deleteRecord<Record>(RECORD_TYPE, { id: { EQUALS: id } });

    if (result === 0)
    {
        logger.warn(`Relation with id '${id}' has not been deleted.`);
    }
}
