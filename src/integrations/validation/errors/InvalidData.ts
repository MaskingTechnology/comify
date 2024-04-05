
import ValidationError from './ValidationError.js';

export default class InvalidData extends ValidationError
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
