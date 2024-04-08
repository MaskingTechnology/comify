
import NotificationError from './NotificationError.js';

export default class SubscriptionNotFound extends NotificationError
{
    constructor(recipientId?: string)
    {
        super(recipientId ? `Subscription not found for: ${recipientId}` : 'Subscription not found');
    }
}
