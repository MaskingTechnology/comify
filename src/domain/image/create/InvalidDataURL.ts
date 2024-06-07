
import { BadRequest } from '^/integrations/runtime/module';

export default class InvalidDataURL extends BadRequest
{
    constructor()
    {
        super('Value is not a valid data URL');
    }
}
