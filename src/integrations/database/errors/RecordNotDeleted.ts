
import DatabaseError from './DatabaseError';

export default class RecordNotDeleted extends DatabaseError
{
    constructor(message?: string)
    {
        super(message ?? 'Record not deleted');
    }
}
