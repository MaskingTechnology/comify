
import { NotFound } from '@comify/common/integrations/errors';

export default class CreatorMetricsNotFound extends NotFound
{
    constructor()
    {
        super('Creator metrics not found');
    }
}
