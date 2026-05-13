
import { ServerError } from '^/integrations/errors';

export default class ImageNotDownloaded extends ServerError
{
    constructor()
    {
        super('Failed to download image');
    }
}
