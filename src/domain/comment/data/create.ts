
import database, { RecordData } from '^/integrations/database/module';
import { generateId } from '^/integrations/utilities/crypto';

import { RECORD_TYPE } from '../definitions/constants';
import CommentData from './CommentData';
import mapRecord from './mapRecord';

export default async function create(message: string): Promise<CommentData>
{
    const id = generateId();

    const record: RecordData = { id, message };

    await database.createRecord(RECORD_TYPE, record);

    return mapRecord(record);
}
