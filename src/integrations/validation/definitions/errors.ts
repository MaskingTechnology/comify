
export class ValidationError extends Error
{
    constructor(message?: string)
    {
        super(message ?? 'Validation error');
    }
}

export class UnknownImplementation extends ValidationError
{
    constructor(name?: string) 
    {
        super(`Unknown validation implementation: ${name}`);
    }
}

export class UnknownValidator extends ValidationError
{
    constructor(name?: string) 
    {
        super(`Unknown validator: ${name}`);
    }
}

export class InvalidData extends ValidationError
{
    #messages: Map<string, string>;

    constructor(messages: Map<string, string> = new Map())
    {
        const keys = [...messages.keys()].join(', ');

        super(`Invalid field(s): ${keys}`);

        this.#messages = messages;
    }

    get messages() { return this.#messages; }
}
