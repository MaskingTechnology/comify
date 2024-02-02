
export class InvalidValidator extends Error
{
    constructor(name?: string) 
    {
        super(`The validator ${name} is not valid`);
    }
}

export class ValidationError extends Error
{
    constructor(message?: string)
    {
        super(message ?? 'Validation error');
    }
}
