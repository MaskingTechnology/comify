
import { NotFound } from '^/integrations/runtime';

export default class PostMetricsNotFound extends NotFound
{
    constructor()
    {
        super('Post metrics not found');
    }
}
