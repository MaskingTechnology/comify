
import { NotFound } from '^/integrations/errors';

export default class PostMetricsNotFound extends NotFound
{
    constructor()
    {
        super('Post metrics not found');
    }
}
