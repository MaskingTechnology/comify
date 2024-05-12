
import database from '^/integrations/database/module';

import { RECORD_TYPE } from '../definitions/constants';
import type PostData from './PostData';

export default async function remove(post: PostData): Promise<void>
{
    const updatedData = { ...post, deleted: true };

    return database.updateRecord(RECORD_TYPE, post.id, updatedData);
}
