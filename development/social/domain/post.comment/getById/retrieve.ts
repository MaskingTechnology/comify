
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, Record } from '../definitions';

export default async function retrieve(id: string): Promise<Record | undefined>
{
    return database.readRecord<Record>(RECORD_TYPE, { id: { EQUALS: id } });
}
