
import type { ValidationSchema } from '@theshelf/validation';

import validator from '@comify/common/integrations/validation';

import { requiredIdValidation } from '~/definitions';

import type { Data } from '../definitions';

import InvalidComic from './InvalidComic';

type ValidationModel = Pick<Data, 'imageId' | 'structure'>;

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

export default function validateData({ imageId, structure }: ValidationModel): void
{
    const result = validator.validate({ imageId, structure }, schema);

    if (result.invalid)
    {
        throw new InvalidComic(result.messages);
    }
}
