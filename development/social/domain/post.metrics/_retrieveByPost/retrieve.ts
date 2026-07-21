
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';

export default async function retrieve(postId: string): Promise<Record | undefined>
{
    const query = { postId: { EQUALS: postId } };

    return database.readRecord(RECORD_TYPE, query) as Promise<Record | undefined>;
}
