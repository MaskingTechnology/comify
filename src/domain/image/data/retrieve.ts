
import database from '../../../integrations/database/module';

import { RECORD_TYPE } from './constants.js';
import type ImageData from './ImageData';
import createData from './createData';

export default async function retrieve(imageId: string): Promise<ImageData>
{
    const record = await database.readRecord(RECORD_TYPE, imageId);

    return createData(record);
}
