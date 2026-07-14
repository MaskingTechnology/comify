
import type { ValidationSchema } from '@theshelf/validation';

import validator from '@comify/common/integrations/validation';

import { fullNameValidation, type Data } from '../definitions';
import InvalidFullName from './InvalidFullName';

type ValidationModel = Pick<Data, 'fullName'>;

const schema: ValidationSchema =
{
    fullName: fullNameValidation
};

export default function validateData({ fullName }: ValidationModel): void
{
    const result = validator.validate({ fullName }, schema);

    if (result.invalid)
    {
        throw new InvalidFullName(result.messages);
    }
}
