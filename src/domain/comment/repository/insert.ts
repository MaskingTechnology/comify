
import database from '^/integrations/database/module';

import type CommentData from '../data/CommentData';
import { RECORD_TYPE } from '../definitions/constants';
import mapTo from './mapTo';

export default async function insert(data: CommentData): Promise<string>
{
    const record = mapTo(data);

    return database.createRecord(RECORD_TYPE, record);
}
