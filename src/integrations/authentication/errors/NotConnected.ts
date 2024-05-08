
import AuthenticationError from './AuthenticationError.js';

export default class NotConnected extends AuthenticationError
{
    constructor(message?: string)
    {
        super(message ?? 'Identity provider not connected');
    }
}
