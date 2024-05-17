
import database from '^/integrations/database/module';

import type CreatorData from '../data/CreatorData';
import { RECORD_TYPE } from '../definitions/constants';
import mapTo from './mapTo';

export default async function insert(data: CreatorData): Promise<string>
{
    const record = mapTo(data);

    return database.createRecord(RECORD_TYPE, record);
}
