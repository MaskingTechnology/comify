
import validator, { ValidationSchema } from '^/integrations/validation/module';

import InvalidImage from './InvalidImage';

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

export type Data = {
    readonly mimeType: string;
    readonly size: number;
};

export default function feature({ mimeType, size }: Data): void
{
    const result = validator.validate({ mimeType, size }, schema);

    if (result.invalid)
    {
        throw new InvalidImage(result.messages);
    }
}
