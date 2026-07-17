
import database from '@comify/common/integrations/database';
import logger from '@comify/common/integrations/logging';

import { RECORD_TYPE, type Record } from '../definitions';

type UpdateData = Partial<Omit<Record, 'id'>>;

export default async function run(id: string, record: UpdateData): Promise<void>
{
    const result = await database.updateRecord(RECORD_TYPE, { id: { EQUALS: id } }, record);

    if (result === 0)
    {
        logger.warn(`Post with id '${id}' has not been deleted.`);
    }
}
