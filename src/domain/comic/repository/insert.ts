
import database from '^/integrations/database/module';

import type ComicData from '../data/ComicData';
import { RECORD_TYPE } from '../definitions/constants';
import mapToRecord from './mapToRecord';

export default async function insert(data: ComicData): Promise<string>
{
    const record = mapToRecord(data);

    return database.createRecord(RECORD_TYPE, record);
}
