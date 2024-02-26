
import { RecordData } from '../../../integrations/database/module';
import PostData from './PostData';

export default async function createData(record: RecordData): Promise<PostData>
{
    return new PostData(
        record.id as string,
        record.creatorId as string,
        record.comicId as string,
        new Date(record.createdAt as string),
        record.ratingCount as number,
        record.reactionCount as number
    );
}
