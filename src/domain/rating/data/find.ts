
import database, { RecordQuery } from '^/integrations/database/module';

import { RECORD_TYPE } from '../definitions/constants';
import RatingData from './RatingData';
import mapRecord from './mapRecord';

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
