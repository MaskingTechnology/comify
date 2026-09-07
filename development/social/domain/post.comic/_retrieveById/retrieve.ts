
import database from '@comify/common/integrations/database';

import { type Record, RECORD_TYPE } from '../definitions';

export default async function (id: string): Promise<Record | undefined>
{
    return database.readRecord<Record>(RECORD_TYPE, { id: { EQUALS: id } });
}
