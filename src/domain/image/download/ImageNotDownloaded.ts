
import { ServerError } from '^/integrations/runtime/module';

export default class ImageNotDownloaded extends ServerError
{
    constructor()
    {
        super('Failed to download image');
    }
}
