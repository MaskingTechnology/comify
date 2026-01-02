
import { BadRequest } from '^/integrations/errors';

export default class InvalidFullName extends BadRequest
{
    constructor()
    {
        super('Full name is invalid');
    }
}
