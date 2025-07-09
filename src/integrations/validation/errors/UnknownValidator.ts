
import ValidationError from './ValidationError';

export default class UnknownValidator extends ValidationError
{
    constructor(name: string) 
    {
        super(`Unknown validator: ${name}`);
    }
}
