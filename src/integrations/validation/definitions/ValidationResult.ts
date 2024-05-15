
export default class ValidationResult
{
    #invalid: boolean;
    #messages: Map<string, string>;

    constructor(invalid: boolean, messages: Map<string, string> = new Map())
    {
        this.#invalid = invalid;
        this.#messages = messages;
    }

    get invalid() { return this.#invalid; }

    get messages() { return this.#messages; }
}
