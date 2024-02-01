
export class TooManySimilarNickNames extends Error
{
    constructor(message?: string)
    {
        super(message ?? 'Too many simular nicknames');
    }
}
