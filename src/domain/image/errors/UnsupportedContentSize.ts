
export default class UnsupportedContentSize extends Error
{
    constructor(message?: string)
    {
        super(message ?? 'Unsupported content type');
    }
}
