
import type { ValidationSchema } from '@theshelf/validation';

import validator from '@comify/common/integrations/validation';

import InvalidRange from './InvalidRange';

export type Range = {
    offset: number;
    limit: number;
};

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

export default function run({ offset, limit }: Range): void
{
    const result = validator.validate({ offset, limit }, schema);

    if (result.invalid)
    {
        throw new InvalidRange(result.messages);
    }
}

export { InvalidRange };
