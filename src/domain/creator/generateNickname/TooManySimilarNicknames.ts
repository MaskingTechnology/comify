
import { BadRequest } from '^/integrations/runtime/';

export default class TooManySimilarNicknames extends BadRequest
{
    constructor(message?: string)
    {
        super(message ?? 'Too many similar nicknames');
    }
}
