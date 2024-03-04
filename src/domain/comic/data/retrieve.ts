
import database from '../../../integrations/database/module';
import ComicData from './ComicData';
import { RECORD_TYPE } from './constants.js';
import mapRecord from './mapRecord';

export default async function retrieve(id: string): Promise<ComicData>
{
    const record = await database.readRecord(RECORD_TYPE, id);

    return mapRecord(record);
}
