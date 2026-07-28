
import { BadRequest } from '@comify/common/integrations/errors';

export default class extends BadRequest
{
    constructor()
    {
        super('Value is not a valid record URL');
    }
}
