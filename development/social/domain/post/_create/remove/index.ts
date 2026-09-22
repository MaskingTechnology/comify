
import database from '@comify/common/integrations/database';
import { type Identifier } from '@comify/common/primitives/identifier';

import { RECORD_TYPE, type Record } from '../../definitions';
import { logger } from '../../integrations';

export default async function (id: Identifier): Promise<void>
{
    const result = await database.deleteRecord<Record>(RECORD_TYPE, { id: { EQUALS: id } });

    if (result.noChanges)
    {
        logger.warn(`Post with id '${id}' has not been deleted.`);
    }
}
