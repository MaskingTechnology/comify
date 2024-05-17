
import { type RecordData } from '^/integrations/database/module';

import CommentData from '../data/CommentData';

export default function mapToData(record: RecordData): CommentData
{
    return new CommentData(
        record.id as string,
        record.message as string
    );
}
