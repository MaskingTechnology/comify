
import { NotFound } from '@comify/common/integrations/errors';

export default class extends NotFound
{
    constructor()
    {
        super('No creator found for nickname');
    }
}
