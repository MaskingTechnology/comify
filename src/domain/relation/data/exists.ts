
import database, { RecordQuery } from '../../../integrations/database/module';

import { RECORD_TYPE } from './constants';

export default async function exists(followerId: string, followingId: string): Promise<boolean>
{
    const query: RecordQuery = {
        'AND'
            : [
                { followerId: { EQUALS: followerId } },
                { followingid: { EQUALS: followingId } }
            ]
    };
    const relation = await database.findRecord(RECORD_TYPE, query);

    return relation !== undefined;
}
