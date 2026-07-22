
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';

export default async function retrieve(postId: string): Promise<Record | undefined>
{
    return database.readRecord<Record>(RECORD_TYPE, {
        postId: { EQUALS: postId }
    });
}
