
import ValidationError from './ValidationError.js';

export default class UnknownImplementation extends ValidationError
{
    constructor(name?: string) 
    {
        super(`Unknown validation implementation: ${name}`);
    }
}
