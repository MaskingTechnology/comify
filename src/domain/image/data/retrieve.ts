
import database from '../../../integrations/database/module';
import type ImageData from './ImageData';
import { RECORD_TYPE } from './constants.js';
import createData from './createData';

export default async function retrieve(id: string): Promise<ImageData>
{
    const record = await database.readRecord(RECORD_TYPE, id);

    return createData(record);
}
