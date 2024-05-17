
import database from '^/integrations/database/module';

import type CommentData from '../data/CommentData';
import { RECORD_TYPE } from '../definitions/constants';
import mapToRecord from './mapToRecord';

export default async function insert(data: CommentData): Promise<string>
{
    const record = mapToRecord(data);

    return database.createRecord(RECORD_TYPE, record);
}
