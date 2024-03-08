
export default class ImageNotDownloaded extends Error
{
    constructor()
    {
        super('Failed to download image');
    }
}
