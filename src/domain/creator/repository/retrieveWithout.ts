
import database, { SortDirections, type QueryStatement, type RecordQuery, type RecordSort } from '^/integrations/database/module';

import type CreatorData from '../data/CreatorData';
import type SortFields from '../definitions/SortFields';
import { RECORD_TYPE } from '../definitions/constants';
import mapToData from './mapToData';

export default async function retrieveWithout(ids: string[], sortField: SortFields, search?: string): Promise<CreatorData[]>
{
    const defaultQuery: RecordQuery = { id: { NOT_IN: ids } };
    const searchQuery: RecordQuery = {
        'OR': [
            { fullName: { CONTAINS: search } },
            { nickname: { CONTAINS: search } }
        ]
    };

    const query: QueryStatement = search !== undefined
        ? { ...defaultQuery, ...searchQuery }
        : defaultQuery;

    const recordSort: RecordSort = { [sortField]: SortDirections.ASCENDING };

    const records = await database.searchRecords(RECORD_TYPE, query, undefined, recordSort, 10);

    const data = records.map(record => mapToData(record));

    return Promise.all(data);
}
