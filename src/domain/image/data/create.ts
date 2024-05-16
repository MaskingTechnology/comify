
import database, { RecordData } from '^/integrations/database/module';
import { generateId } from '^/integrations/utilities/crypto';

import { RECORD_TYPE } from '../definitions/constants';
import ImageData from './ImageData';
import mapRecord from './mapRecord';

export default async function create(storageKey: string, filename: string, mimeType: string, size: number): Promise<ImageData>
{
    const id = generateId();

    const record: RecordData = { id, storageKey, filename, mimeType, size };

    await database.createRecord(RECORD_TYPE, record);

    return mapRecord(record);
}
