
import validator from '@comify/common/integrations/validation';

import { identifierValidation } from '@comify/common/primitives/identifier';

import { type RelationKey } from '../../definitions';

import InvalidRelation from './InvalidRelation';

export default function (key: RelationKey): void
{
    const result = validator.validate(key, {
        followerId: identifierValidation,
        followingId: identifierValidation
    });

    if (result.invalid)
    {
        throw new InvalidRelation(result.messages);
    }
}
