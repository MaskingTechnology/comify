
import database from '^/integrations/database/module';

import type ImageData from '../data/ImageData';
import { RECORD_TYPE } from '../definitions/constants';
import mapToRecord from './mapToRecord';

export default async function insertData(data: ImageData): Promise<string>
{
    const record = mapToRecord(data);

    return database.createRecord(RECORD_TYPE, record);
}
