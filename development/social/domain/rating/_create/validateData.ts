
import type { ValidationSchema } from '@theshelf/validation';

import validator from '@comify/common/integrations/validation';

import { requiredIdValidation } from '~/definitions';

import type { Data } from '../definitions';

import InvalidRating from './InvalidRating';

type ValidationModel = Pick<Data, 'postId'>;

const schema: ValidationSchema =
{
    postId: requiredIdValidation
};

export default function validateData({ postId }: ValidationModel): void
{
    const result = validator.validate({ postId }, schema);

    if (result.invalid)
    {
        throw new InvalidRating(result.messages);
    }
}
