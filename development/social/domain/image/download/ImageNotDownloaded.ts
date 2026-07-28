
import { ServerError } from '@comify/common/integrations/errors';

export default class extends ServerError
{
    constructor()
    {
        super('Failed to download image');
    }
}
