
import { type RecordData } from '^/integrations/database/module';

import type RelationData from '../data/RelationData';

export default function mapFrom(data: RelationData): RecordData
{
    return {
        id: data.id,
        followerId: data.followerId,
        followingId: data.followingId
    };
}
