
import type { ValidationSchema } from '@theshelf/validation';

import validator from '@comify/common/integrations/validation';

import { requiredIdValidation } from '~/definitions';

import { type RelationKey } from '../../definitions';

import InvalidRelation from './InvalidRelation';

const schema: ValidationSchema =
{
    followerId: requiredIdValidation,
    followingId: requiredIdValidation
};

export default function (key: RelationKey): void
{
    const result = validator.validate(key, schema);

    if (result.invalid)
    {
        throw new InvalidRelation(result.messages);
    }
}
