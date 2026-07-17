
import type { ValidationSchema } from '@theshelf/validation';

import validator from '@comify/common/integrations/validation';

import { requiredIdValidation } from '~/definitions';

import type { Record } from '../definitions';

import InvalidRating from './InvalidRating';

type ValidationModel = Pick<Record, 'postId'>;

const schema: ValidationSchema =
{
    postId: requiredIdValidation
};

export default function validate({ postId }: ValidationModel): void
{
    const result = validator.validate({ postId }, schema);

    if (result.invalid)
    {
        throw new InvalidRating(result.messages);
    }
}
