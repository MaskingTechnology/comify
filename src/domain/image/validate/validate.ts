
import type { ValidationSchema } from '@theshelf/validation';
import validator from '@theshelf/validation';

import type { MetaData } from '../types';
import InvalidImage from './InvalidImage';

const TEN_B = 10;
const FIVE_MB = 1024 * 1024 * 5;

const schema: ValidationSchema =
{
    mimeType:
    {
        message: 'Value is not a valid mime type',
        STRING:
        {
            required: true,
            pattern: 'image/(jpeg|png|gif)'
        }
    },
    size:
    {
        message: 'Value is not a valid size',
        NUMBER:
        {
            required: true,
            minValue: TEN_B,
            maxValue: FIVE_MB
        }
    }
};

export default function validate({ mimeType, size }: MetaData): void
{
    const result = validator.validate({ mimeType, size }, schema);

    if (result.invalid)
    {
        throw new InvalidImage(result.messages);
    }
}
