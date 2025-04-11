
import DatabaseError from './DatabaseError';

export default class RecordsNotDeleted extends DatabaseError
{
    constructor(message?: string)
    {
        super(message ?? 'Records not deleted');
    }
}
