
import database, { RecordQuery } from '^/integrations/database/module';

import { RECORD_TYPE } from '../definitions/constants';
import type PostData from './PostData';
import mapRecord from './mapRecord';

export default async function retrieveWithoutCreators(creatorIds: string[]): Promise<PostData[]>
{
    const query: RecordQuery = { creatorId: { NOT_IN: creatorIds } };

    const records = await database.searchRecords(RECORD_TYPE, query);

    return Promise.all(records.map(mapRecord));
}
