
import HttpError from './HttpError.js';

export default class UnknownImplementation extends HttpError
{
    constructor(name?: string)
    {
        super(`Unknown http implementation: ${name}`);
    }
}
