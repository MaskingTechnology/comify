
import NotificationError from './NotificationError.js';

export default class NotConnected extends NotificationError
{
    constructor(message?: string)
    {
        super(message ?? 'Notification service not connected');
    }
}
