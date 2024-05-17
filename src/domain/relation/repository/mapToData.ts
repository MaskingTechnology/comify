
import { type RecordData } from '^/integrations/database/module';

import RelationData from '../data/RelationData';

export default function mapToData(record: RecordData): RelationData
{
    return new RelationData(
        record.id as string,
        record.followerId as string,
        record.followingId as string
    );
}
