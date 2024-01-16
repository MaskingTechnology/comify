
export class AuthenticationError extends Error
{
    constructor(message: string)
    {
        super(message);
    }
}

export class UnknownImplementation extends AuthenticationError
{
    constructor(name?: string)
    {
        super(`Unknown authentication implementation: ${name}`);
    }
}

export class NotConnected extends AuthenticationError
{
    constructor(message?: string)
    {
        super(message ?? 'Identity provider not connected');
    }
}
