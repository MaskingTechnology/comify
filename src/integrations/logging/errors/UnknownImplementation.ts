
import LogError from './LogError';

export default class UnknownImplementation extends LogError
{
    constructor(name?: string)
    {
        super(`Unknown logger implementation: ${name}`);
    }
}
