
import DatabaseError from './DatabaseError.js';

export default class NotConnected extends DatabaseError
{
    constructor(message?: string)
    {
        super(message ?? 'Database not connected');
    }
}
