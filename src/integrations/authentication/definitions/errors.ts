
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

export class NotFound extends AuthenticationError
{
    constructor(message?: string)
    {
        super(message ?? 'Identity provider not found');
    }
}
