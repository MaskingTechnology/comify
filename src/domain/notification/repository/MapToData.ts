
import { type RecordData } from '^/integrations/database/module';

import NotificationData from '../data/NotificationData';

export default function mapToData(record: RecordData): NotificationData
{
    return new NotificationData(
        record.id as string,
        record.type as string,
        record.senderId as string,
        record.receiverId as string,
        record.postId as string,
        record.reactionId as string,
        new Date(record.createdAt as string)
    );
}
