
import { ZodError, ZodIssue, ZodType, z } from 'zod';

import { Validator } from '../../definitions/interfaces';
import { Message, ValidationSchema, Validations } from '../../definitions/types';
import { FieldTypes } from '../../definitions/constants';
import { UnknownValidator, InvalidData } from '../../definitions/errors';

type ValidatorFunction = (value: Validations[keyof Validations]) => z.ZodType<unknown, z.ZodTypeDef> | z.ZodArray<z.ZodType<unknown, z.ZodTypeDef>>;

const MAX_EMAIL_LENGTH = 320;

// Zod is so type heavy that we've chosen for inferred types to be used.
// This is a trade-off between readability and verbosity.

export default class Zod implements Validator
{
    #validations: Map<string, ValidatorFunction> = new Map();

    constructor()
    {
        this.#validations.set(FieldTypes.STRING, (value: Validations['STRING']) => this.#validateString(value));
        this.#validations.set(FieldTypes.NUMBER, (value: Validations['NUMBER']) => this.#validateNumber(value));
        this.#validations.set(FieldTypes.BOOLEAN, (value: Validations['BOOLEAN']) => this.#validateBoolean(value));
        this.#validations.set(FieldTypes.DATE, (value: Validations['DATE']) => this.#validateDate(value));
        this.#validations.set(FieldTypes.UUID, (value: Validations['UUID']) => this.#validateUuid(value));
        this.#validations.set(FieldTypes.EMAIL, (value: Validations['EMAIL']) => this.#validateEmail(value));
        this.#validations.set(FieldTypes.ARRAY, (value: Validations['ARRAY']) => this.#validateArray(value));
    }

    validate(data: unknown, schema: ValidationSchema): void
    {
        try
        {
            const validator = this.#buildValidator(schema);

            validator.parse(data);
        }
        catch (error: unknown)
        {
            if (error instanceof ZodError)
            {
                const issues = error.issues;

                const messages = this.#getMessages(issues, schema);

                throw new InvalidData(messages);
            }

            throw error;
        }
    }

    #buildValidator(schema: ValidationSchema)
    {
        return Object.entries(schema)
            .reduce((partialSchema, [key, value]) => 
            {
                const fieldValidation = this.#getValidation(value);

                return partialSchema.extend({ [key]: fieldValidation });
            },
                z.object({})
            ).strict();
    }

    #getValidation(schema: Partial<Validations | Message>)
    {
        for (const [key, validation] of Object.entries(schema))
        {
            if (key === 'message') continue;

            const validator = this.#validations.get(key.toLocaleLowerCase());

            if (validator === undefined)
            {
                throw new UnknownValidator(key);
            }

            return validator(validation);
        }

        return z.never();
    }

    #validateString(value: Validations['STRING'])
    {
        let validation = z.string();

        if (value.minLength !== undefined) validation = validation.min(value.minLength);
        if (value.maxLength !== undefined) validation = validation.max(value.maxLength);
        if (value.pattern !== undefined) validation = validation.regex(new RegExp(value.pattern));

        return this.#checkRequired(value, validation);
    }

    #validateNumber(value: Validations['NUMBER'])
    {
        let validation = z.number();

        if (value.minValue !== undefined) validation = validation.min(value.minValue);
        if (value.maxValue !== undefined) validation = validation.max(value.maxValue);

        return this.#checkRequired(value, validation);
    }

    #validateBoolean(value: Validations['BOOLEAN'])
    {
        const validation = z.boolean();

        return this.#checkRequired(value, validation);
    }

    #validateDate(value: Validations['DATE'])
    {
        const validation = z.date();

        return this.#checkRequired(value, validation);
    }

    #validateUuid(value: Validations['UUID'])
    {
        const validation = z.string().uuid();

        return this.#checkRequired(value, validation);
    }

    #validateEmail(value: Validations['EMAIL'])
    {
        const validation = z.string().email().max(MAX_EMAIL_LENGTH);

        return this.#checkRequired(value, validation);
    }

    #validateArray(value: Validations['ARRAY'])
    {
        let validation = value.validations === undefined
            ? z.array(z.unknown())
            : z.array(this.#getValidation(value.validations));

        if (value.minLength !== undefined) validation = validation.min(value.minLength);
        if (value.maxLength !== undefined) validation = validation.max(value.maxLength);

        return this.#checkRequired(value, validation);
    }

    #checkRequired(value: Validations[keyof Validations], validation: ZodType)
    {
        return value.required
            ? validation
            : validation.optional();
    }

    #getMessages(issues: ZodIssue[], scheme: ValidationSchema)
    {
        const messages = new Map<string, string>();

        for (const issue of issues)
        {
            const field = issue.code === 'unrecognized_keys'
                ? issue.keys.join(', ')
                : String(issue.path[0]);

            const message = this.#getMessageByField(field, scheme);

            messages.set(field, message);
        }

        return messages;
    }

    #getMessageByField(path: string, scheme: ValidationSchema)
    {
        const field = scheme[path] as Message;

        if (field === undefined)
        {
            return 'Unrecognized field(s)';
        }

        return field.message ?? 'Invalid field';
    }
}
