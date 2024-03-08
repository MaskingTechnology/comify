
import database, { RecordData } from '../../../integrations/database/module';
import { RECORD_TYPE } from '../definitions/constants';
import ComicData from './ComicData';

export default async function create(imageId: string, structure?: string): Promise<ComicData>
{
    const record: RecordData = { imageId, structure };

    const id = await database.createRecord(RECORD_TYPE, record);

    return new ComicData(id, imageId, structure);
}
