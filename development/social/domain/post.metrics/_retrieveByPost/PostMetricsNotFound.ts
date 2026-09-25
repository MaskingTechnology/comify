
import { NotFound } from '@comify/common/integrations/errors';

export default class PostMetricsNotFound extends NotFound
{
    constructor()
    {
        super('Post metrics not found');
    }
}
