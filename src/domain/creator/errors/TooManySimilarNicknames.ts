
export default class TooManySimilarNicknames extends Error
{
    constructor(message?: string)
    {
        super(message ?? 'Too many similar nicknames');
    }
}
