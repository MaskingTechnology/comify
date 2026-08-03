
import type { ValidationSchema } from '@theshelf/validation';

import validator from '@comify/common/integrations/validation';

import { identifierValidation } from '@comify/common/primitives/identifier';

import { type RelationKey } from '../../definitions';

import InvalidRelation from './InvalidRelation';

const schema: ValidationSchema =
{
    followerId: identifierValidation,
    followingId: identifierValidation
};

export default function (key: RelationKey): void
{
    const result = validator.validate(key, schema);

    if (result.invalid)
    {
        throw new InvalidRelation(result.messages);
    }
}
