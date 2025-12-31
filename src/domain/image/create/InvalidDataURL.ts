
import { BadRequest } from '^/integrations/errors';

export default class InvalidDataURL extends BadRequest
{
    constructor()
    {
        super('Value is not a valid data URL');
    }
}
