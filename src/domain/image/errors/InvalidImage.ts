
export default class InvalidImage extends Error
{
    constructor(message?: string)
    {
        super(message ?? 'Invalid image');
    }
}
