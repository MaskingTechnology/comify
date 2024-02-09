
export class UnsupportedMimeType extends Error
{
    constructor(message?: string)
    {
        super(message ?? 'Unsupported mime type');
    }
}

export class UnsupportedContentSize extends Error
{
    constructor(message?: string)
    {
        super(message ?? 'Unsupported content type');
    }
}
