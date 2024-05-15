
import database, { RecordData } from '^/integrations/database/module';
import { generateId } from '^/integrations/utilities/crypto';

import { RECORD_TYPE } from '../definitions/constants';
import ComicData from './ComicData';

export default async function create(imageId: string, structure?: string): Promise<ComicData>
{
    const id = generateId();

    const record: RecordData = { id, imageId, structure };

    await database.createRecord(RECORD_TYPE, record);

    return new ComicData(id, imageId, structure);
}
