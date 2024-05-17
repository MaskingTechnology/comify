
import database from '^/integrations/database/module';

import type RelationData from '../data/RelationData';
import { RECORD_TYPE } from '../definitions/constants';
import mapToRecord from './mapToRecord';

export default async function insert(data: RelationData): Promise<string>
{
    const record = mapToRecord(data);

    return database.createRecord(RECORD_TYPE, record);
}
