
import { NotFound } from '^/integrations/runtime';

export default class PostMetricsNotFound extends NotFound
{
    constructor()
    {
        super('Creator metrics not found');
    }
}
