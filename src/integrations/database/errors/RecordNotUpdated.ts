
import DatabaseError from './DatabaseError.js';

export default class RecordNotUpdated extends DatabaseError
{
    constructor(message?: string)
    {
        super(message ?? 'Record not updated');
    }
}
