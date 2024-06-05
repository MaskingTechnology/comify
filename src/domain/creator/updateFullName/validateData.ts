
import validator, { ValidationSchema } from '^/integrations/validation/module';

import InvalidCreator from '../InvalidCreator';
import { fullNameValidation } from '../definitions';
import { ValidationModel } from './types';

const schema: ValidationSchema = {
    fullName: fullNameValidation
};

export default function validateData({ fullName }: ValidationModel): void
{
    const result = validator.validate({ fullName }, schema);

    if (result.invalid)
    {
        throw new InvalidCreator(result.messages);
    }
}
