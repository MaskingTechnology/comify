
import database, { type RecordQuery } from '^/integrations/database/module';

import type RatingData from '../data/RatingData';
import { RECORD_TYPE } from '../definitions/constants';
import mapRecord from './mapFrom';

export default async function find(creatorId: string, postId: string | undefined, reactionId: string | undefined): Promise<RatingData | undefined>
{
    const query: RecordQuery = {
        creatorId: { EQUALS: creatorId },
        postId: { EQUALS: postId },
        reactionId: { EQUALS: reactionId }
    };

    const record = await database.findRecord(RECORD_TYPE, query);

    return record !== undefined
        ? mapRecord(record)
        : undefined;
}
