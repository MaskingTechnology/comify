
import database, { RecordData } from '../../../integrations/database/module';
import { RECORD_TYPE } from '../definitions/constants';
import CommentData from './CommentData';

export default async function create(message: string): Promise<CommentData>
{
    const record: RecordData = { message };

    const id = await database.createRecord(RECORD_TYPE, record);

    return new CommentData(id, message);
}
