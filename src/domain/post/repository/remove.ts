
import database from '^/integrations/database/module';

import type PostData from '../data/PostData';
import { RECORD_TYPE } from '../definitions/constants';
import mapToRecord from './mapToDeleteRecord';

export default async function remove(post: PostData): Promise<void>
{
    const data = mapToRecord(post);

    return database.updateRecord(RECORD_TYPE, post.id, data);
}
