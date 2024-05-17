
import database from '^/integrations/database/module';

import type CreatorData from '../data/CreatorData';
import { RECORD_TYPE } from '../definitions/constants';
import mapToRecord from './mapToNewRecord';

export default async function insert(data: CreatorData): Promise<string>
{
    const record = mapToRecord(data);

    return database.createRecord(RECORD_TYPE, record);
}
