
import AuthenticationError from './AuthenticationError';

export default class UnknownImplementation extends AuthenticationError
{
    constructor(name?: string)
    {
        super(`Unknown authentication implementation: ${name}`);
    }
}
