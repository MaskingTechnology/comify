
import DatabaseError from './DatabaseError';

export default class RecordNotCreated extends DatabaseError
{
    constructor(message?: string)
    {
        super(message ?? 'Record not created');
    }
}
