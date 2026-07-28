
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';

export default async function (id: string, posts: number): Promise<boolean>
{
    const result = await database.updateRecord<Record>(RECORD_TYPE, { id: { EQUALS: id } }, { posts });

    return result > 0;
}
