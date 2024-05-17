
import database from '^/integrations/database/module';

import type RatingData from '../data/RatingData';
import { RECORD_TYPE } from '../definitions/constants';
import mapToRecord from './mapToRecord';

export default async function insert(data: RatingData): Promise<string>
{
    const record = mapToRecord(data);

    return database.createRecord(RECORD_TYPE, record);
}
