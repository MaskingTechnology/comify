
import { ZodError, z } from 'zod';

import { Validation } from '../../definitions/interfaces';
import { ValidationSchema, Validations } from '../../definitions/types';
import { FieldTypes } from '../../definitions/constants';
import { InvalidValidator, ValidationError } from '../../definitions/errors.js';

export default class Zod implements Validation
{
    #validations: Map<string, any> = new Map();

    constructor()
    {
        this.#validations.set(FieldTypes.STRING, (value: Validations['STRING']) => this.#validateString(value));
        this.#validations.set(FieldTypes.NUMBER, (value: Validations['NUMBER']) => this.#validateNumber(value));
        this.#validations.set(FieldTypes.BOOLEAN, (value: Validations['BOOLEAN']) => this.#validateBoolean(value));
        this.#validations.set(FieldTypes.DATE, (value: Validations['BOOLEAN']) => this.#validateDate(value));
        this.#validations.set(FieldTypes.UUID, (value: Validations['UUID']) => this.#validateUuid(value));
        this.#validations.set(FieldTypes.EMAIL, (value: Validations['EMAIL']) => this.#validateEmail(value));
        this.#validations.set(FieldTypes.ARRAY, (value: Validations['ARRAY']) => this.#validateArray(value));
    }

    validate(data: unknown, schema: ValidationSchema): void
    {
        const result = Object.entries(schema)
            .reduce((partialSchema, [key, value]) => 
            {
                const fieldValidation = this.#getValidation(value);

                return partialSchema.extend({ [key]: fieldValidation });
            },
                z.object({})
            );

        try
        {
            result.parse(data);
        }
        catch (error: unknown)
        {
            if (error instanceof ZodError)
            {
                const message = error.errors[0]?.message;

                throw new ValidationError(message);
            }

            throw error;
        }
    }

    #getValidation(schema: Partial<Validations>): z.ZodType<any, any>
    {
        for (const [key, validation] of Object.entries(schema))
        {
            const validator = this.#validations.get(key.toLocaleLowerCase());

            if (validator === undefined)
            {
                throw new InvalidValidator(key);
            }

            return validator(validation);

        }

        throw new InvalidValidator();
    }

    #validateString(value: Validations['STRING'])
    {
        let result = z.string();

        if (value.minLength !== undefined) result = result.min(value.minLength, { message: value.message });
        if (value.maxLength !== undefined) result = result.max(value.maxLength, { message: value.message });
        if (value.pattern !== undefined) result = result.regex(new RegExp(value.pattern), { message: value.message });

        return value.required
            ? result
            : result.optional();
    }

    #validateNumber(value: Validations['NUMBER'])
    {
        let result = z.number();

        if (value.minValue !== undefined) result = result.min(value.minValue);
        if (value.maxValue !== undefined) result = result.max(value.maxValue);

        return value.required
            ? result
            : result.optional();
    }

    #validateBoolean(value: Validations['BOOLEAN'])
    {
        return value.required
            ? z.boolean()
            : z.boolean().optional();
    }

    #validateDate(value: Validations['DATE'])
    {
        return value.required
            ? z.date()
            : z.date().optional();
    }

    #validateUuid(value: Validations['UUID'])
    {
        return value.required
            ? z.string().uuid()
            : z.string().uuid().optional();
    }

    #validateEmail(value: Validations['EMAIL'])
    {
        return value.required
            ? z.string().email()
            : z.string().email().optional();
    }

    #validateArray(value: Validations['ARRAY'])
    {
        let result = z.array(this.#getValidation(value.validations));

        if (value.minLength !== undefined) result = result.min(value.minLength);
        if (value.maxLength !== undefined) result = result.max(value.maxLength);

        return value.required
            ? result
            : result.optional();
    }
}
