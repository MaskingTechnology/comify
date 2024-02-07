
import { ValidationSchema } from './types';

export interface Validator
{
    validate(data: unknown, schema: ValidationSchema): void;
}
