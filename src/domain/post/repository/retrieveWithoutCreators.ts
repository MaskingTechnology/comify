
import database, { type RecordQuery } from '^/integrations/database/module';

import type PostData from '../data/PostData';
import { RECORD_TYPE } from '../definitions/constants';
import mapRecord from './mapFrom';

export default async function retrieveWithoutCreators(creatorIds: string[]): Promise<PostData[]>
{
    const query: RecordQuery = { creatorId: { NOT_IN: creatorIds }, deleted: { 'EQUALS': false } };

    const records = await database.searchRecords(RECORD_TYPE, query);

    return Promise.all(records.map(mapRecord));
}
