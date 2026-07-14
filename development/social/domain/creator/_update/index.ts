
import database from '@comify/common/integrations/database';
import logger from '@comify/common/integrations/logging';

import { RECORD_TYPE, type Data } from '../definitions';

type UpdateData = Partial<Omit<Data, 'id'>>;

export default async function run(id: string, data: UpdateData): Promise<void>
{
    const result = await database.updateRecord(RECORD_TYPE, { id: { EQUALS: id } }, data);

    if (result === 0)
    {
        logger.warn(`Creator with id '${id}' has not been updated.`);
    }
}
