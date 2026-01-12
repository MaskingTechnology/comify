
import type { ValidationSchema } from '@theshelf/validation';

import validator from '^/integrations/validation';

import InvalidRange from './InvalidRange';
import type { Range } from './types';

const schema: ValidationSchema =
{
    offset:
    {
        message: 'Value is not a valid offset',
        NUMBER:
        {
            required: true,
            minValue: 0
        }
    },
    limit:
    {
        message: 'Value is not a valid limit',
        NUMBER:
        {
            required: true,
            minValue: 1,
            maxValue: 30
        }
    }
};

export default function validateRange({ offset, limit }: Range): void
{
    const result = validator.validate({ offset, limit }, schema);

    if (result.invalid)
    {
        throw new InvalidRange(result.messages);
    }
}
