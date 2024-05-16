
import { RecordData } from '^/integrations/database/module';

import RelationData from './RelationData';

export default function mapRecord(record: RecordData): RelationData
{
    return new RelationData(
        record.id as string,
        record.followerId as string,
        record.followingId as string
    );
}
