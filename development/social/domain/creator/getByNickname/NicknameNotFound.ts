
import { NotFound } from '@comify/common/integrations/errors';

export default class NicknameNotFound extends NotFound
{
    constructor()
    {
        super('No creator found for nickname');
    }
}
