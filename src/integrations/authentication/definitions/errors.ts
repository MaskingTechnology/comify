
export class AuthenticationError extends Error
{
    constructor(message: string)
    {
        super(message);
    }
}

export class NotConnected extends AuthenticationError
{
    constructor(message?: string)
    {
        super(message ?? 'Identity provider not connected');
    }
}
