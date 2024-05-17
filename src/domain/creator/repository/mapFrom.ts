
import type { RecordData } from '^/integrations/database/module';

import CreatorData from '../data/CreatorData';

export default function mapFrom(record: RecordData): CreatorData
{
    return new CreatorData(
        record.id as string,
        record.fullName as string,
        record.nickname as string,
        record.email as string,
        record.portrait as string,
        new Date(record.joinedAt as string),
        record.popularity as number,
        record.postCount as number,
        record.followerCount as number,
        record.followingCount as number
    );
}
