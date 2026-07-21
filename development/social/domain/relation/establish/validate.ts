
import type { ValidationSchema } from '@theshelf/validation';

import validator from '@comify/common/integrations/validation';

import { requiredIdValidation } from '~/definitions';

import type { CreateData } from './definitions';

import InvalidRelation from './InvalidRelation';

const schema: ValidationSchema =
{
    followerId: requiredIdValidation,
    followingId: requiredIdValidation
};

export default function validate(data: CreateData): void
{
    const result = validator.validate(data, schema);

    if (result.invalid)
    {
        throw new InvalidRelation(result.messages);
    }
}
