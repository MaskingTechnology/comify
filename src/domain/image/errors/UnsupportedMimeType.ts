
export default class UnsupportedMimeType extends Error
{
    constructor(message?: string)
    {
        super(message ?? 'Unsupported mime type');
    }
}
