
import { NotFound } from '^/integrations/runtime/';

export default class CreatorMetricsNotFound extends NotFound
{
    constructor()
    {
        super('Creator metrics not found');
    }
}
