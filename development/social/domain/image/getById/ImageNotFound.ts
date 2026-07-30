
import { NotFound } from '@comify/common/integrations/errors';

export default class ImageNotDownloaded extends NotFound
{
    constructor()
    {
        super('Image not found');
    }
}
