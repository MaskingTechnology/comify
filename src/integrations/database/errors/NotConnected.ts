
import DatabaseError from './DatabaseError';

export default class NotConnected extends DatabaseError
{
    constructor(message?: string)
    {
        super(message ?? 'Database not connected');
    }
}
