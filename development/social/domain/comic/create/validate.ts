
import type { ValidationSchema } from '@theshelf/validation';

import validator from '@comify/common/integrations/validation';

import { requiredIdValidation } from '~/definitions';

import type { Record } from '../definitions';

import InvalidComic from './InvalidComic';

type ValidationModel = Pick<Record, 'imageId' | 'structure'>;

const schema: ValidationSchema =
{
    imageId: requiredIdValidation,
    structure:
    {
        message: 'Value is not a string',
        STRING:
        {
            required: false
        }
    }
};

export default function validate({ imageId, structure }: ValidationModel): void
{
    const result = validator.validate({ imageId, structure }, schema);

    if (result.invalid)
    {
        throw new InvalidComic(result.messages);
    }
}
