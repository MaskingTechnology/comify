
export class DatabaseError extends Error
{
    constructor(message: string)
    {
        super(message);
    }
}

export class UnknownImplementation extends DatabaseError
{
    constructor(name?: string)
    {
        super(`Unknown database implementation: ${name}`);
    }
}

export class NotConnected extends DatabaseError
{
    constructor(message?: string)
    {
        super(message ?? 'Database not connected');
    }
}

export class RecordNotFound extends DatabaseError
{
    constructor(message?: string)
    {
        super(message ?? 'Record not found');
    }
}

export class RecordNotCreated extends DatabaseError
{
    constructor(message?: string)
    {
        super(message ?? 'Record not created');
    }
}

export class RecordNotUpdated extends DatabaseError
{
    constructor(message?: string)
    {
        super(message ?? 'Record not updated');
    }
}

export class RecordNotDeleted extends DatabaseError
{
    constructor(message?: string)
    {
        super(message ?? 'Record not deleted');
    }
}
