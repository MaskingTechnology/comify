
import database from '^/integrations/database/module';

import type CreatorData from '../data/CreatorData';
import { RECORD_TYPE } from '../definitions/constants';
import mapToRecord from './mapToUpdateRecord';

export default async function update(data: CreatorData): Promise<void>
{
    const record = mapToRecord(data);

    await database.updateRecord(RECORD_TYPE, data.id, record);
}
