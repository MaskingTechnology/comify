
import sanitizeHtml from 'sanitize-html';

const options: sanitizeHtml.IOptions = {
    allowedTags: [],
    allowedAttributes: {}
};

function sanitizeValue(input: unknown): unknown
{
    return typeof input === 'string'
        ? sanitizeHtml(input, options)
        : input;
}

export function sanitize(input: Record<string, unknown>): Record<string, unknown>
{
    const result: Record<string, unknown> = {};

    for (const [key, value] of Object.entries(input))
    {
        result[key] = sanitizeValue(value);
    }

    return result;
}
