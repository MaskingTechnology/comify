
import { NotFound } from '@comify/common/integrations/errors';

export default class ImageNotFound extends NotFound
{
    constructor()
    {
        super('Image not found');
    }
}
