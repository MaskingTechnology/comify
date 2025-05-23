
import DatabaseError from './DatabaseError';

export default class UnknownImplementation extends DatabaseError
{
    constructor(name: string)
    {
        super(`Unknown database implementation: ${name}`);
    }
}
