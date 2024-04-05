
import database from '../../../integrations/database/module';
import { RECORD_TYPE } from '../definitions/constants';
import PostData from './PostData';
import mapRecord from './mapRecord';

export default async function retrieve(id: string): Promise<PostData>
{
    console.log('retrieve', id);

    const record = await database.readRecord(RECORD_TYPE, id);

    return mapRecord(record);
}
