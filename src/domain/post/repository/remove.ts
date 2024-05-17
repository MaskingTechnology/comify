
import database from '^/integrations/database/module';

import type PostData from '../data/PostData';
import { RECORD_TYPE } from '../definitions/constants';
import mapToDelete from './mapToDelete';

export default async function remove(post: PostData): Promise<void>
{
    const data = mapToDelete(post);

    return database.updateRecord(RECORD_TYPE, post.id, data);
}
