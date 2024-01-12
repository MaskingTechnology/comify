
export class NotificationError extends Error
{
    constructor(message: string)
    {
        super(message);
    }
}

export class NotConnected extends NotificationError
{
    constructor(message?: string)
    {
        super(message ?? 'Notification service not connected');
    }
}

export class SubscriptionNotFound extends NotificationError
{
    constructor(recipientId?: string)
    {
        super(recipientId ? `Subscription not found for: ${recipientId}` : 'Subscription not found');
    }
}
