
import database, { RecordQuery } from '^/integrations/database/module';

import { RECORD_TYPE } from '../definitions';

export type Data = {
    readonly id: string;
    readonly creatorId: string;
    readonly comicId: string;
    readonly createdAt: string;
    readonly ratingCount: number;
    readonly reactionCount: number;
};

export default async function retrieveData(creatorIds: string[]): Promise<Data[]>
{
    const fields = ['id', 'creatorId', 'comicId', 'createdAt', 'ratingCount', 'reactionCount'];
    const query: RecordQuery = { creatorId: { NOT_IN: creatorIds }, deleted: { 'EQUALS': false } };

    return database.searchRecords(RECORD_TYPE, query, fields) as Promise<Data[]>;
}
