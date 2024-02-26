
import database, { RecordData } from '../../../integrations/database/module';
import ComicData from './ComicData';
import { RECORD_TYPE } from './constants';

export default async function create(imageId: string, structure?: string): Promise<ComicData>
{
    const record: RecordData = { imageId, structure };

    const id = await database.createRecord(RECORD_TYPE, record);

    return new ComicData(id, imageId, structure);
}
