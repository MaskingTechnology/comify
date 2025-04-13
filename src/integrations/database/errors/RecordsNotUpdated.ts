
import DatabaseError from './DatabaseError';

export default class RecordsNotUpdated extends DatabaseError
{
    constructor(message?: string)
    {
        super(message ?? 'Records not updated');
    }
}
