
import { BadRequest } from '@comify/common/integrations/errors';

export default class extends BadRequest
{
    constructor()
    {
        super('Nickname already exists');
    }
}
