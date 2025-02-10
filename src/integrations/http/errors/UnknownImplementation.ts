
import HttpError from './HttpError';

export default class UnknownImplementation extends HttpError
{
    constructor(name?: string)
    {
        super(`Unknown http implementation: ${name}`);
    }
}
