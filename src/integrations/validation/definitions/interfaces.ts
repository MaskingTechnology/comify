
import { ValidationSchema } from './types';

export interface Validation
{
    validate(data: unknown, schema: ValidationSchema): void;
}
