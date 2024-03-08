
import { ValidationSchema } from './types.js';

export interface Validator
{
    validate(data: unknown, schema: ValidationSchema): void;
}
