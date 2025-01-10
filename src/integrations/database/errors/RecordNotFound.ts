
import DatabaseError from './DatabaseError';

export default class RecordNotFound extends DatabaseError
{
    constructor(message?: string)
    {
        super(message ?? 'Record not found');
    }
}
