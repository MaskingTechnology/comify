
export default class ValidationResult
{
    readonly #invalid: boolean;
    readonly #messages: Map<string, string>;

    constructor(invalid: boolean, messages = new Map<string, string>())
    {
        this.#invalid = invalid;
        this.#messages = messages;
    }

    get invalid() { return this.#invalid; }

    get messages() { return this.#messages; }
}
