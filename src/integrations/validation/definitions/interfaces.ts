
import type ValidationResult from './ValidationResult';
import type { ValidationSchema } from './types';

export interface Validator
{
    validate(data: unknown, schema: ValidationSchema): ValidationResult;
}
