
import validator, { ValidationSchema } from '^/integrations/validation/module';

import { requiredIdValidation } from '^/domain/definitions';

import InvalidRelation from './InvalidRelation';
import { ValidationModel } from './types';

const schema: ValidationSchema = {
    followerId: requiredIdValidation,
    followingId: requiredIdValidation
};

export default function validateData({ followerId, followingId }: ValidationModel): void
{
    const result = validator.validate({ followerId, followingId }, schema);

    if (result.invalid)
    {
        throw new InvalidRelation(result.messages);
    }
}
