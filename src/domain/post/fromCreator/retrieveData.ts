
import database, { RecordQuery, RecordSort, SortDirections } from '^/integrations/database/module';

import { RECORD_TYPE } from '../definitions';

export type Data = {
    readonly id: string;
    readonly creatorId: string;
    readonly comicId: string;
    readonly createdAt: string;
    readonly ratingCount: number;
    readonly reactionCount: number;
};

export default async function retrieveData(creatorId: string): Promise<Data[]>
{
    const fields = ['id', 'creatorId', 'comicId', 'createdAt', 'ratingCount', 'reactionCount'];
    const query: RecordQuery = { creatorId: { 'EQUALS': creatorId }, deleted: { 'EQUALS': false } };
    const sort: RecordSort = { createdAt: SortDirections.DESCENDING };

    return database.searchRecords(RECORD_TYPE, query, fields, sort) as Promise<Data[]>;
}
