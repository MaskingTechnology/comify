
import { BadRequest } from '^/integrations/runtime/';

export default class InvalidDataURL extends BadRequest
{
    constructor()
    {
        super('Value is not a valid data URL');
    }
}
