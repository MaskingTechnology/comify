
import database from '^/integrations/database/module';

import type CreatorData from '../data/CreatorData';
import { RECORD_TYPE } from '../definitions/constants';
import mapToData from './mapToData';

export default async function retrieve(id: string): Promise<CreatorData>
{
    const record = await database.readRecord(RECORD_TYPE, id);

    return mapToData(record);
}
