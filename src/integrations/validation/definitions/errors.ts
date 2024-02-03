
export class InvalidValidator extends Error
{
    constructor(name?: string) 
    {
        super(`The validator ${name} is not valid`);
    }
}

export class ValidationError extends Error
{
    #messages: Map<string, string>;

    constructor(messages: Map<string, string> = new Map())
    {
        super('Validation error');

        this.#messages = messages;
    }

    get messages() { return this.#messages; }
}
