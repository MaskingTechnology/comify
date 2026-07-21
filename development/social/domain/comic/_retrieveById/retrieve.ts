
import database from '@comify/common/integrations/database';

import { RECORD_TYPE } from '../definitions';
import type { Record } from '../definitions';

export default async function retrieve(id: string): Promise<Record | undefined>
{
    return database.readRecord(RECORD_TYPE, { id: { EQUALS: id } }) as Promise<Record | undefined>;
}
