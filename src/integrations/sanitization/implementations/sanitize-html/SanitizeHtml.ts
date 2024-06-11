
import sanitizeHtml from 'sanitize-html';

import { Sanitizer } from '../../definitions/interfaces.js';

const options: sanitizeHtml.IOptions = {
    allowedTags: [],
    allowedAttributes: {}
};

export default class SanitizeHtml implements Sanitizer
{
    sanitize(input: Record<string, unknown>): Record<string, unknown>
    {
        const result: Record<string, unknown> = {};

        for (const [key, value] of Object.entries(input))
        {
            result[key] = this.#sanitizeValue(value);
        }

        return result;
    }

    #sanitizeValue(input: unknown): unknown
    {
        return typeof input === 'string'
            ? sanitizeHtml(input, options)
            : input;
    }
}
