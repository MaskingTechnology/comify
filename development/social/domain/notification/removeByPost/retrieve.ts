
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';

export default async function retrieve(postId: string): Promise<Record[]>
{
    return database.searchRecords<Record>(RECORD_TYPE, {
        deleted: { EQUALS: false },
        postId: { EQUALS: postId }
    });
} 
