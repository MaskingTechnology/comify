
export class TooManySimilarNicknames extends Error
{
    constructor(message?: string)
    {
        super(message ?? 'Too many simular nicknames');
    }
}
