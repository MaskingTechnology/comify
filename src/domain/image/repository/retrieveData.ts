
import database from '^/integrations/database/module';

import type ImageData from '../data/ImageData';
import { RECORD_TYPE } from '../definitions/constants';
import mapToData from './mapToData';

export default async function retrieveData(id: string): Promise<ImageData>
{
    const record = await database.readRecord(RECORD_TYPE, id);

    return mapToData(record);
}
