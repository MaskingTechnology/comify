
import SanitizerError from './SanitizerError.js';

export default class UnknownImplementation extends SanitizerError
{
    constructor(name?: string)
    {
        super(`Unknown sanitizer implementation: ${name}`);
    }
}
