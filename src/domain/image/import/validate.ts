
import validator, { ValidationSchema } from '^/integrations/validation/module';

import InvalidImage from '../errors/InvalidImage';

const TEN_B = 10;
const FIVE_MB = 1024 * 1024 * 5;

const schema: ValidationSchema = {
    mimeType:
    {
        message: 'Invalid mime type',
        STRING:
        {
            required: true,
            pattern: 'image/(jpeg|png|gif)'
        }
    },
    size:
    {
        message: 'Invalid size',
        NUMBER:
        {
            required: true,
            minValue: TEN_B,
            maxValue: FIVE_MB
        }
    }
};

export default function validate(mimeType: string, size: number): void
{
    const result = validator.validate({ mimeType, size }, schema);

    if (result.invalid)
    {
        throw new InvalidImage(result.messages);
    }
}
