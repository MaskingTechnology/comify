
import DatabaseError from './DatabaseError.js';

export default class UnknownImplementation extends DatabaseError
{
    constructor(name?: string)
    {
        super(`Unknown database implementation: ${name}`);
    }
}
