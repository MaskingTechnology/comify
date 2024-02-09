
import getPostView from '../../post/get';
import getReactionView from '../../reaction/get';
import getRelationView from '../../relation/get';
import type NotificationData from '../data/NotificationData';
import NotificationView from './NotificationView';

export default async function createView(data: NotificationData): Promise<NotificationView>
{
    const [relationView, postView, reactionView] = await Promise.all([
        getRelationView(data.receiverId, data.senderId),
        data.postId ? getPostView(data.postId) : undefined,
        data.reactionId ? getReactionView(data.reactionId) : undefined
    ]);

    return new NotificationView(data.id, data.type, relationView, postView, reactionView, data.createdAt);
}
