
import { ServerError } from '^/integrations/runtime/';

export default class ImageNotDownloaded extends ServerError
{
    constructor()
    {
        super('Failed to download image');
    }
}
