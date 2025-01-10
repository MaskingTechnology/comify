
import AuthenticationError from './AuthenticationError';

export default class NotConnected extends AuthenticationError
{
    constructor(message?: string)
    {
        super(message ?? 'Identity provider not connected');
    }
}
