
import { BadRequest } from '^/integrations/errors';

export default class NicknameAlreadyExists extends BadRequest
{
    constructor()
    {
        super('Nickname already exists');
    }
}
