
import ValidationError from './ValidationError.js';

export default class UnknownValidator extends ValidationError
{
    constructor(name?: string) 
    {
        super(`Unknown validator: ${name}`);
    }
}
