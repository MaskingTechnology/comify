
import database from '^/integrations/database/module';

import type ComicData from '../data/ComicData';
import { RECORD_TYPE } from '../definitions/constants';
import mapTo from './mapTo';

export default async function insert(data: ComicData): Promise<string>
{
    const record = mapTo(data);

    return database.createRecord(RECORD_TYPE, record);
}
