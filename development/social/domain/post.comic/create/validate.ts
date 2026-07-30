
import type { ValidationSchema } from '@theshelf/validation';

import validator from '@comify/common/integrations/validation';

import { type CreateData } from './definitions';
import InvalidComic from './InvalidComic';

const schema: ValidationSchema =
{
    imageDataUrl:
    {
        message: 'Value is not a string',
        STRING:
        {
            required: true
        }
    },
    structure:
    {
        message: 'Value is not a string',
        STRING:
        {
            required: false
        }
    }
};

export default function (data: CreateData): void
{
    const result = validator.validate(data, schema);

    if (result.invalid)
    {
        throw new InvalidComic(result.messages);
    }
}
