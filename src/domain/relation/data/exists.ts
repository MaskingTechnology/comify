
import database, { RecordQuery } from '../../../integrations/database/module';
import { RECORD_TYPE } from './constants';

export default async function exists(followerId: string, followingId: string): Promise<boolean>
{
    const query: RecordQuery = {
        followerId: { EQUALS: followerId },
        followingId: { EQUALS: followingId }
    };
    const relation = await database.findRecord(RECORD_TYPE, query);

    return relation !== undefined;
}
