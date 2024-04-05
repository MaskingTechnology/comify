
import NotificationError from './NotificationError.js';

export default class UnknownImplementation extends NotificationError
{
    constructor(name?: string)
    {
        super(`Unknown notification implementation: ${name}`);
    }
}
