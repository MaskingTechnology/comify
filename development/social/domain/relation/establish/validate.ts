
import type { ValidationSchema } from '@theshelf/validation';

import validator from '@comify/common/integrations/validation';

import { requiredIdValidation } from '~/definitions';

import type { Record } from '../definitions';

import InvalidRelation from './InvalidRelation';

type ValidationModel = Pick<Record, 'followerId' | 'followingId'>;

const schema: ValidationSchema =
{
    followerId: requiredIdValidation,
    followingId: requiredIdValidation
};

export default function validate({ followerId, followingId }: ValidationModel): void
{
    const result = validator.validate({ followerId, followingId }, schema);

    if (result.invalid)
    {
        throw new InvalidRelation(result.messages);
    }
}
