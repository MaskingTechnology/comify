
import type Requester from '../../authentication/Requester';
import getPostView from '../../post/getByIdAggregated/feature';
import getReactionView from '../../reaction/get';
import getRelationView from '../../relation/get';
import type NotificationData from '../data/NotificationData';
import NotificationView from './NotificationView';

export default async function createView(requester: Requester, data: NotificationData): Promise<NotificationView>
{
    const [relationView, postView, reactionView] = await Promise.all([
        getRelationView(data.receiverId, data.senderId),
        data.postId ? getPostView(requester, data.postId) : undefined,
        data.reactionId ? getReactionView(requester, data.reactionId) : undefined
    ]);

    return new NotificationView(data.id, data.type, relationView, postView, reactionView, data.createdAt);
}
