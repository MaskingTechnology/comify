
import { NotFound } from '^/integrations/errors';

export default class NicknameNotFound extends NotFound
{
    constructor()
    {
        super('No creator found for nickname');
    }
}
