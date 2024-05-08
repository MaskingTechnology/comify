
import AuthenticationError from './AuthenticationError.js';

export default class UnknownImplementation extends AuthenticationError
{
    constructor(name?: string)
    {
        super(`Unknown authentication implementation: ${name}`);
    }
}
