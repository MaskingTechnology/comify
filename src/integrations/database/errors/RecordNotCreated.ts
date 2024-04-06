
import DatabaseError from './DatabaseError.js';

export default class RecordNotCreated extends DatabaseError
{
    constructor(message?: string)
    {
        super(message ?? 'Record not created');
    }
}
