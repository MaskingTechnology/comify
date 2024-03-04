
import database, { RecordQuery, RecordSort, SortDirections } from '../../../integrations/database/module';
import createCreatorData from '../data/createData';
import CreatorData from './CreatorData';
import { RECORD_TYPE } from './constants';

export default async function retrieveWithout(ids: string[], sort: string, search?: string | undefined): Promise<CreatorData[]>
{
    const defaultQuery: RecordQuery = { id: { NOT_IN: ids } };
    const searchQuery: RecordQuery = {
        'AND':
            [
                { id: { NOT_IN: ids } },
                {
                    'OR':
                        [
                            { fullName: { CONTAINS: search } },
                            { nickname: { CONTAINS: search } }
                        ]
                }
            ]
    };
    const query: RecordQuery = search === undefined
        ? defaultQuery
        : searchQuery;
    const recordSort: RecordSort = { [sort]: SortDirections.ASCENDING };

    const records = await database.searchRecords(RECORD_TYPE, query, undefined, recordSort, 10);

    return Promise.all(records.map(data => createCreatorData(data)));
}
