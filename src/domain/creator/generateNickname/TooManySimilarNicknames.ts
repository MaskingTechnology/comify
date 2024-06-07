
import { ServerError } from '^/integrations/runtime/module';

export default class TooManySimilarNicknames extends ServerError
{
    constructor(message?: string)
    {
        super(message ?? 'Too many similar nicknames');
    }
}
