
import { BadRequest } from 'jitar';

export default class ValidationError extends BadRequest
{
    readonly #messages: Map<string, string>;

    constructor(messages: Map<string, string>)
    {
        const keys = [...messages.keys()].join(', ');

        super(`Invalid field(s): ${keys}`);

        this.#messages = messages;
    }

    get messages() { return this.#messages; }
}
