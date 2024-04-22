
import { RecordData } from '../../../integrations/database/module';
import CommentData from './CommentData';

export default function mapRecord(record: RecordData): CommentData
{
    return new CommentData(
        record.id as string,
        record.message as string
    );
}
