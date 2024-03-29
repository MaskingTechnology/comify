
import { RecordData } from '../../../integrations/database/module';
import CreatorData from './CreatorData';

export default function mapRecord(record: RecordData): CreatorData
{
    return new CreatorData(
        record.id as string,
        record.fullName as string,
        record.nickname as string,
        record.email as string,
        record.portrait as string,
        record.joinedAt as Date,
        record.popularity as number,
        record.postCount as number,
        record.followerCount as number,
        record.followingCount as number
    );
}
