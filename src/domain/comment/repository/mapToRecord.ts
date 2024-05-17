
import { type RecordData } from '^/integrations/database/module';

import type CommentData from '../data/CommentData';

export default function mapToRecord(data: CommentData): RecordData
{
    return {
        id: data.id,
        message: data.message
    };
}
