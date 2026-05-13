
import { BadRequest } from '^/integrations/errors';

export default class TooManySimilarNicknames extends BadRequest
{
    constructor(message?: string)
    {
        super(message ?? 'Too many similar nicknames');
    }
}
